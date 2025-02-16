type IconSize = 16 | 24 | 32 | 48 | 128;

type IconPaths = Record<IconSize, string>;

const ACTIVE_ICON_PATH = "assets/active-icon.png";

const NON_ACTIVE_ICON_PATH = "assets/icon.png";

const ACTIVE_ICON_PATHS = {
  "16": ACTIVE_ICON_PATH,
  "24": ACTIVE_ICON_PATH,
  "32": ACTIVE_ICON_PATH,
  "48": ACTIVE_ICON_PATH,
  "128": ACTIVE_ICON_PATH
} satisfies IconPaths;

const NON_ACTIVE_ICON_PATHS = {
  "16": NON_ACTIVE_ICON_PATH,
  "24": NON_ACTIVE_ICON_PATH,
  "32": NON_ACTIVE_ICON_PATH,
  "48": NON_ACTIVE_ICON_PATH,
  "128": NON_ACTIVE_ICON_PATH
} satisfies IconPaths;

export const getIconPath = ({active}: { active: boolean | undefined }) => {
  return active ? ACTIVE_ICON_PATHS : NON_ACTIVE_ICON_PATHS;
};
