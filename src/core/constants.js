// TODO: this should probably be moved a folder up

// urls
export const GATEWAY_BASE_URL = 'https://gateway.ob1.io/';
export const GATEWAY_URL = `${GATEWAY_BASE_URL}ob/`;
export const SEARCH_BASE = 'https://search.ob1.io/';
export const SEARCH_URL = `${SEARCH_BASE}listings/search`;
export const SEARCH_RANDOM_URL = `${SEARCH_BASE}listings/random`;
export const TICKER_URL = 'https://ticker.openbazaar.org/';
// export const WEB_RELAY_SOCKET_URL = 'wss://webchat.ob1.io:8080';
export const WEB_RELAY_SOCKET_URL = 'ws://localhost:8080';

export const CURRENT_LISTING_VERSION = 4;
export const MIN_SUPPORTED_LISTING_VERSION = 3;
export const RFC3339_REGEX = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/;