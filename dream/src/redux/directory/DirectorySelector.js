import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const createDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.section
);
