import urlJoin from 'url-join';

import { getClientConfig } from '@/config/client';
import { Locales } from '@/locales/resources';

import pkg from '../../package.json';
import { DEFAULT_LANG, checkLang } from './locale';
import { INBOX_SESSION_ID } from './session';

export const GITHUB = pkg.homepage;
export const CHANGELOG = `${pkg.homepage}/blob/master/CHANGELOG.md`;
export const ABOUT = pkg.homepage;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = 'https://discord.gg/AYFPHvv2jT';

export const PLUGINS_INDEX_URL =
  getClientConfig().PLUGINS_INDEX_URL ?? 'https://chat-plugins.lobehub.com';

export const getPluginIndexJSON = (lang: Locales = DEFAULT_LANG, baseUrl = PLUGINS_INDEX_URL) => {
  if (checkLang(lang)) return baseUrl;

  return urlJoin(baseUrl, `index.${lang}.json`);
};

export const AGENTS_INDEX_URL =
  getClientConfig().AGENTS_INDEX_URL ?? 'https://chat-agents.lobehub.com';

export const getAgentIndexJSON = (lang: Locales = DEFAULT_LANG, baseUrl = AGENTS_INDEX_URL) => {
  if (checkLang(lang)) return baseUrl;

  return urlJoin(baseUrl, `index.${lang}.json`);
};

export const getAgentJSON = (
  identifier: string,
  lang: Locales = DEFAULT_LANG,
  baseUrl = AGENTS_INDEX_URL,
) => {
  if (checkLang(lang)) return urlJoin(baseUrl, `${identifier}.json`);

  return urlJoin(baseUrl, `${identifier}.${lang}.json`);
};

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile#session=${id}` : `/chat#session=${id}`;
