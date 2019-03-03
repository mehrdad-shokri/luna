import { createActionCreator } from 'commons/utils';

const ActionCreator = createActionCreator('@@LUNA_APP/DATA');

const addActionError = ActionCreator('ACTION_ERROR');
const addFilter = ActionCreator('ADD_FILTER');
const addSelected = ActionCreator('ADD_SELECTED');
const addInstallOption = ActionCreator('ADD_INSTALL_OPTION');
const clearSelected = ActionCreator('CLEAR_SELECTED');
const clearFilters = ActionCreator('CLEAR_FILTERS');
const clearPackages = ActionCreator('CLEAR_PACKAGES');
const setPackagesStart = ActionCreator('SET_PACKAGES_START');
const setPackagesSuccess = ActionCreator('SET_PACKAGES_SUCCESS');
const setOutdatedSuccess = ActionCreator('SET_OUTDATED_SUCCESS');
const setSortOptions = ActionCreator('SET_SORT_OPTIONS');
const setActive = ActionCreator('SET_ACTIVE_PACKAGE');
const setActiveError = ActionCreator('SET_ACTIVE_PACKAGE_ERROR');
const setPackagesError = ActionCreator('SET_PACKAGES_ERROR');
const updateData = ActionCreator('UPDATE_DATA');
const setPage = ActionCreator('SET_PAGE');
const setPageRows = ActionCreator('SET_PAGE_ROWS');

const installPackages = ActionCreator('INSTALL_PACKAGES');
const updatePackages = ActionCreator('UPDATE_PACKAGES');

export {
  installPackages,
  updatePackages,
  addActionError,
  addFilter,
  addSelected,
  addInstallOption,
  clearSelected,
  clearFilters,
  clearPackages,
  setActive,
  setActiveError,
  setPackagesStart,
  setPackagesSuccess,
  setPackagesError,
  setSortOptions,
  setOutdatedSuccess,
  setPage,
  setPageRows,
  updateData
};
