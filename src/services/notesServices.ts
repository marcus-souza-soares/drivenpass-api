import * as notesRepository from "../repositories/notesRepository.js";
import { Note, NoteArray, NoteInsertData } from "../types/noteTypes";

export async function createNote(
  note: Omit<NoteInsertData, "userId">,
  userId: number
) {
  const { title } = note;
  const noteFromDb = await notesRepository.verifyIfExists(note);
  if (noteFromDb?.title === title)
    throw { code: "NotAllowed", message: "Nota já cadastrada!" };
  await notesRepository.create({
    ...note,
    userId,
  });
}

export async function getNotes(userId: number) {
  if (!userId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const notes: NoteArray = await notesRepository.getnotes(userId);
  return notes;
}

export async function getUniqueNote(userId: number, noteId: number) {
  if (!noteId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const note: Note = await notesRepository.getUniqueNote(noteId);
  if (!note)
    throw { code: "NotFound", message: "Essa credencial não existe..." };
  if (userId !== note.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão de acesso a essa nota!",
    };
  return note;
}
export async function deleteNote(userId: number, noteId: number) {
  if (!noteId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const note: Note = await notesRepository.getUniqueNote(noteId);
  if (!note) throw { code: "NotFound", message: "Essa nota não existe..." };
  if (userId !== note.userId)
    throw {
      code: "NotAllowed",
      message: "Você não tem permissão para deletar essa nota!",
    };
  await notesRepository.deleteNote(noteId);
}
