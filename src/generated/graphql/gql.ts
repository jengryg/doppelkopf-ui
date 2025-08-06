/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment callProperties on Call {\n  id\n  callType\n  cardsPlayedBefore\n  description\n  ...cu\n}": typeof types.CallPropertiesFragmentDoc,
    "fragment callTree on Call {\n  ...callProperties\n  hand {\n    id\n  }\n  round {\n    id\n  }\n}": typeof types.CallTreeFragmentDoc,
    "fragment cu on HasCreatedUpdated {\n  cu {\n    created\n    updated\n  }\n}": typeof types.CuFragmentDoc,
    "fragment se on HasStartedEnded {\n  se {\n    started\n    ended\n  }\n}": typeof types.SeFragmentDoc,
    "fragment sq on ScoreQuadruple {\n  p90\n  p60\n  p30\n  p00\n}": typeof types.SqFragmentDoc,
    "fragment gameProperties on Game {\n  id\n  playerLimit\n  state\n  ...cu\n  ...se\n}": typeof types.GamePropertiesFragmentDoc,
    "fragment gameTree on Game {\n  ...gameProperties\n  players {\n    ...playerTree\n  }\n  player {\n    ...playerTree\n  }\n  rounds {\n    ...roundTree\n  }\n}": typeof types.GameTreeFragmentDoc,
    "fragment privateHandProperties on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandProperties\n  }\n}": typeof types.PrivateHandPropertiesFragmentDoc,
    "fragment privateHandTree on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandTree\n  }\n}": typeof types.PrivateHandTreeFragmentDoc,
    "fragment publicHandProperties on PublicHand {\n  id\n  team\n  declared\n  bid\n  ...cu\n}": typeof types.PublicHandPropertiesFragmentDoc,
    "fragment publicHandTree on PublicHand {\n  ...publicHandProperties\n  round {\n    id\n  }\n  player {\n    ...playerTree\n  }\n}": typeof types.PublicHandTreeFragmentDoc,
    "fragment playerProperties on Player {\n  id\n  seat\n  dealer\n  ...cu\n}": typeof types.PlayerPropertiesFragmentDoc,
    "fragment playerTree on Player {\n  ...playerProperties\n  game {\n    id\n  }\n  user {\n    id\n    name\n  }\n}": typeof types.PlayerTreeFragmentDoc,
    "fragment resultProperties on RoundResult {\n  id\n  team\n  trickCount\n  scoreObtained\n  scoreTarget\n  points {\n    winning\n    teamCalls {\n      re\n      ko\n    }\n    underCalls {\n      re {\n        ...sq\n      }\n      ko {\n        ...sq\n      }\n    }\n    lostScore {\n      ...sq\n    }\n    special {\n      charly\n      doppelkopf\n      opposition\n    }\n  }\n  ...cu\n}": typeof types.ResultPropertiesFragmentDoc,
    "fragment roundProperties on Round {\n  id\n  number\n  contract\n  state\n  result {\n    re {\n      ...resultProperties\n    }\n    ko {\n      ...resultProperties\n    }\n  }\n  ...cu\n  ...se\n}": typeof types.RoundPropertiesFragmentDoc,
    "fragment roundTree on Round {\n  ...roundProperties\n  game {\n    id\n  }\n  dealer {\n    ...playerTree\n  }\n  hand {\n    ...privateHandTree\n  }\n  hands {\n    ...publicHandTree\n  }\n  calls {\n    ...callTree\n  }\n  tricks {\n    ...trickTree\n  }\n  currentTrick {\n    ...trickTree\n  }\n  turns {\n    ...turnTree\n  }\n}": typeof types.RoundTreeFragmentDoc,
    "fragment trickProperties on Trick {\n  id\n  number\n  state\n  demand\n  openIndex\n  leadingCardIndex\n  cards\n  score\n  ...cu\n  ...se\n}": typeof types.TrickPropertiesFragmentDoc,
    "fragment trickTree on Trick {\n  ...trickProperties\n  winner {\n    ...publicHandTree\n  }\n}": typeof types.TrickTreeFragmentDoc,
    "fragment turnProperties on Turn {\n  id\n  number\n  card\n  ...cu\n}": typeof types.TurnPropertiesFragmentDoc,
    "fragment turnTree on Turn {\n  ...turnProperties\n  round {\n    id\n  }\n  hand {\n    id\n  }\n  trick {\n    id\n  }\n}": typeof types.TurnTreeFragmentDoc,
    "mutation makeCall($handId: ID!, $callType: CallType!) {\n  makeCall(makeCallInput: {callType: $callType, handId: $handId}) {\n    ...callProperties\n  }\n}": typeof types.MakeCallDocument,
    "mutation createGame($playerLimit: Int!, $seed: ByteArray) {\n  createGame(createGameInput: {playerLimit: $playerLimit, seed: $seed}) {\n    ...gameProperties\n  }\n}": typeof types.CreateGameDocument,
    "mutation startGame($gameId: ID!) {\n  startGame(gameId: $gameId) {\n    ...gameProperties\n  }\n}": typeof types.StartGameDocument,
    "mutation bidHand($handId: ID!, $bidding: BiddingOption!) {\n  bid(bidInput: {handId: $handId, bid: $bidding}) {\n    ...privateHandProperties\n  }\n}": typeof types.BidHandDocument,
    "mutation declareHand($handId: ID!, $declaration: DeclarationOption!) {\n  declare(declareInput: {handId: $handId, declaration: $declaration}) {\n    ...privateHandProperties\n  }\n}": typeof types.DeclareHandDocument,
    "mutation joinGame($gameId: ID!, $seat: Int!) {\n  joinGame(joinGameInput: {gameId: $gameId, seat: $seat}) {\n    ...playerProperties\n  }\n}": typeof types.JoinGameDocument,
    "mutation createRound($gameId: ID!) {\n  createRound(gameId: $gameId) {\n    ...roundProperties\n  }\n}": typeof types.CreateRoundDocument,
    "mutation playCard($roundId: ID!, $card: String!) {\n  playCard(playCardInput: {roundId: $roundId, card: $card}) {\n    ...turnProperties\n  }\n}": typeof types.PlayCardDocument,
    "query getCall($id: ID!) {\n  call(id: $id) {\n    ...callProperties\n  }\n}": typeof types.GetCallDocument,
    "query getGame($id: ID!) {\n  game(id: $id) {\n    ...gameProperties\n  }\n}": typeof types.GetGameDocument,
    "query getGameList {\n  games {\n    ...gameProperties\n  }\n}": typeof types.GetGameListDocument,
    "query getGameTree($id: ID!) {\n  game(id: $id) {\n    ...gameTree\n  }\n}": typeof types.GetGameTreeDocument,
    "query getPrivateHand($id: ID!) {\n  privateHand(id: $id) {\n    ...privateHandProperties\n  }\n}": typeof types.GetPrivateHandDocument,
    "query getPublicHand($id: ID!) {\n  publicHand(id: $id) {\n    ...publicHandProperties\n  }\n}": typeof types.GetPublicHandDocument,
    "query getPlayer($id: ID!) {\n  player(id: $id) {\n    ...playerProperties\n  }\n}": typeof types.GetPlayerDocument,
    "query getRound($id: ID!) {\n  round(id: $id) {\n    ...roundProperties\n  }\n}": typeof types.GetRoundDocument,
    "query getRoundTree($id: ID!) {\n  round(id: $id) {\n    ...roundTree\n  }\n}": typeof types.GetRoundTreeDocument,
    "query getTrick($id: ID!) {\n  trick(id: $id) {\n    ...trickProperties\n  }\n}": typeof types.GetTrickDocument,
    "query getTurn($id: ID!) {\n  turn(id: $id) {\n    ...turnProperties\n  }\n}": typeof types.GetTurnDocument,
    "query privateUser {\n  privateUser {\n    id\n    name\n    ...cu\n  }\n}": typeof types.PrivateUserDocument,
    "query publicUser($id: ID!) {\n  publicUser(id: $id) {\n    name\n    id\n  }\n}": typeof types.PublicUserDocument,
};
const documents: Documents = {
    "fragment callProperties on Call {\n  id\n  callType\n  cardsPlayedBefore\n  description\n  ...cu\n}": types.CallPropertiesFragmentDoc,
    "fragment callTree on Call {\n  ...callProperties\n  hand {\n    id\n  }\n  round {\n    id\n  }\n}": types.CallTreeFragmentDoc,
    "fragment cu on HasCreatedUpdated {\n  cu {\n    created\n    updated\n  }\n}": types.CuFragmentDoc,
    "fragment se on HasStartedEnded {\n  se {\n    started\n    ended\n  }\n}": types.SeFragmentDoc,
    "fragment sq on ScoreQuadruple {\n  p90\n  p60\n  p30\n  p00\n}": types.SqFragmentDoc,
    "fragment gameProperties on Game {\n  id\n  playerLimit\n  state\n  ...cu\n  ...se\n}": types.GamePropertiesFragmentDoc,
    "fragment gameTree on Game {\n  ...gameProperties\n  players {\n    ...playerTree\n  }\n  player {\n    ...playerTree\n  }\n  rounds {\n    ...roundTree\n  }\n}": types.GameTreeFragmentDoc,
    "fragment privateHandProperties on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandProperties\n  }\n}": types.PrivateHandPropertiesFragmentDoc,
    "fragment privateHandTree on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandTree\n  }\n}": types.PrivateHandTreeFragmentDoc,
    "fragment publicHandProperties on PublicHand {\n  id\n  team\n  declared\n  bid\n  ...cu\n}": types.PublicHandPropertiesFragmentDoc,
    "fragment publicHandTree on PublicHand {\n  ...publicHandProperties\n  round {\n    id\n  }\n  player {\n    ...playerTree\n  }\n}": types.PublicHandTreeFragmentDoc,
    "fragment playerProperties on Player {\n  id\n  seat\n  dealer\n  ...cu\n}": types.PlayerPropertiesFragmentDoc,
    "fragment playerTree on Player {\n  ...playerProperties\n  game {\n    id\n  }\n  user {\n    id\n    name\n  }\n}": types.PlayerTreeFragmentDoc,
    "fragment resultProperties on RoundResult {\n  id\n  team\n  trickCount\n  scoreObtained\n  scoreTarget\n  points {\n    winning\n    teamCalls {\n      re\n      ko\n    }\n    underCalls {\n      re {\n        ...sq\n      }\n      ko {\n        ...sq\n      }\n    }\n    lostScore {\n      ...sq\n    }\n    special {\n      charly\n      doppelkopf\n      opposition\n    }\n  }\n  ...cu\n}": types.ResultPropertiesFragmentDoc,
    "fragment roundProperties on Round {\n  id\n  number\n  contract\n  state\n  result {\n    re {\n      ...resultProperties\n    }\n    ko {\n      ...resultProperties\n    }\n  }\n  ...cu\n  ...se\n}": types.RoundPropertiesFragmentDoc,
    "fragment roundTree on Round {\n  ...roundProperties\n  game {\n    id\n  }\n  dealer {\n    ...playerTree\n  }\n  hand {\n    ...privateHandTree\n  }\n  hands {\n    ...publicHandTree\n  }\n  calls {\n    ...callTree\n  }\n  tricks {\n    ...trickTree\n  }\n  currentTrick {\n    ...trickTree\n  }\n  turns {\n    ...turnTree\n  }\n}": types.RoundTreeFragmentDoc,
    "fragment trickProperties on Trick {\n  id\n  number\n  state\n  demand\n  openIndex\n  leadingCardIndex\n  cards\n  score\n  ...cu\n  ...se\n}": types.TrickPropertiesFragmentDoc,
    "fragment trickTree on Trick {\n  ...trickProperties\n  winner {\n    ...publicHandTree\n  }\n}": types.TrickTreeFragmentDoc,
    "fragment turnProperties on Turn {\n  id\n  number\n  card\n  ...cu\n}": types.TurnPropertiesFragmentDoc,
    "fragment turnTree on Turn {\n  ...turnProperties\n  round {\n    id\n  }\n  hand {\n    id\n  }\n  trick {\n    id\n  }\n}": types.TurnTreeFragmentDoc,
    "mutation makeCall($handId: ID!, $callType: CallType!) {\n  makeCall(makeCallInput: {callType: $callType, handId: $handId}) {\n    ...callProperties\n  }\n}": types.MakeCallDocument,
    "mutation createGame($playerLimit: Int!, $seed: ByteArray) {\n  createGame(createGameInput: {playerLimit: $playerLimit, seed: $seed}) {\n    ...gameProperties\n  }\n}": types.CreateGameDocument,
    "mutation startGame($gameId: ID!) {\n  startGame(gameId: $gameId) {\n    ...gameProperties\n  }\n}": types.StartGameDocument,
    "mutation bidHand($handId: ID!, $bidding: BiddingOption!) {\n  bid(bidInput: {handId: $handId, bid: $bidding}) {\n    ...privateHandProperties\n  }\n}": types.BidHandDocument,
    "mutation declareHand($handId: ID!, $declaration: DeclarationOption!) {\n  declare(declareInput: {handId: $handId, declaration: $declaration}) {\n    ...privateHandProperties\n  }\n}": types.DeclareHandDocument,
    "mutation joinGame($gameId: ID!, $seat: Int!) {\n  joinGame(joinGameInput: {gameId: $gameId, seat: $seat}) {\n    ...playerProperties\n  }\n}": types.JoinGameDocument,
    "mutation createRound($gameId: ID!) {\n  createRound(gameId: $gameId) {\n    ...roundProperties\n  }\n}": types.CreateRoundDocument,
    "mutation playCard($roundId: ID!, $card: String!) {\n  playCard(playCardInput: {roundId: $roundId, card: $card}) {\n    ...turnProperties\n  }\n}": types.PlayCardDocument,
    "query getCall($id: ID!) {\n  call(id: $id) {\n    ...callProperties\n  }\n}": types.GetCallDocument,
    "query getGame($id: ID!) {\n  game(id: $id) {\n    ...gameProperties\n  }\n}": types.GetGameDocument,
    "query getGameList {\n  games {\n    ...gameProperties\n  }\n}": types.GetGameListDocument,
    "query getGameTree($id: ID!) {\n  game(id: $id) {\n    ...gameTree\n  }\n}": types.GetGameTreeDocument,
    "query getPrivateHand($id: ID!) {\n  privateHand(id: $id) {\n    ...privateHandProperties\n  }\n}": types.GetPrivateHandDocument,
    "query getPublicHand($id: ID!) {\n  publicHand(id: $id) {\n    ...publicHandProperties\n  }\n}": types.GetPublicHandDocument,
    "query getPlayer($id: ID!) {\n  player(id: $id) {\n    ...playerProperties\n  }\n}": types.GetPlayerDocument,
    "query getRound($id: ID!) {\n  round(id: $id) {\n    ...roundProperties\n  }\n}": types.GetRoundDocument,
    "query getRoundTree($id: ID!) {\n  round(id: $id) {\n    ...roundTree\n  }\n}": types.GetRoundTreeDocument,
    "query getTrick($id: ID!) {\n  trick(id: $id) {\n    ...trickProperties\n  }\n}": types.GetTrickDocument,
    "query getTurn($id: ID!) {\n  turn(id: $id) {\n    ...turnProperties\n  }\n}": types.GetTurnDocument,
    "query privateUser {\n  privateUser {\n    id\n    name\n    ...cu\n  }\n}": types.PrivateUserDocument,
    "query publicUser($id: ID!) {\n  publicUser(id: $id) {\n    name\n    id\n  }\n}": types.PublicUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment callProperties on Call {\n  id\n  callType\n  cardsPlayedBefore\n  description\n  ...cu\n}"): (typeof documents)["fragment callProperties on Call {\n  id\n  callType\n  cardsPlayedBefore\n  description\n  ...cu\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment callTree on Call {\n  ...callProperties\n  hand {\n    id\n  }\n  round {\n    id\n  }\n}"): (typeof documents)["fragment callTree on Call {\n  ...callProperties\n  hand {\n    id\n  }\n  round {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment cu on HasCreatedUpdated {\n  cu {\n    created\n    updated\n  }\n}"): (typeof documents)["fragment cu on HasCreatedUpdated {\n  cu {\n    created\n    updated\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment se on HasStartedEnded {\n  se {\n    started\n    ended\n  }\n}"): (typeof documents)["fragment se on HasStartedEnded {\n  se {\n    started\n    ended\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment sq on ScoreQuadruple {\n  p90\n  p60\n  p30\n  p00\n}"): (typeof documents)["fragment sq on ScoreQuadruple {\n  p90\n  p60\n  p30\n  p00\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment gameProperties on Game {\n  id\n  playerLimit\n  state\n  ...cu\n  ...se\n}"): (typeof documents)["fragment gameProperties on Game {\n  id\n  playerLimit\n  state\n  ...cu\n  ...se\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment gameTree on Game {\n  ...gameProperties\n  players {\n    ...playerTree\n  }\n  player {\n    ...playerTree\n  }\n  rounds {\n    ...roundTree\n  }\n}"): (typeof documents)["fragment gameTree on Game {\n  ...gameProperties\n  players {\n    ...playerTree\n  }\n  player {\n    ...playerTree\n  }\n  rounds {\n    ...roundTree\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment privateHandProperties on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandProperties\n  }\n}"): (typeof documents)["fragment privateHandProperties on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment privateHandTree on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandTree\n  }\n}"): (typeof documents)["fragment privateHandTree on PrivateHand {\n  id\n  team\n  cardsPlayed\n  cardsRemaining\n  public {\n    ...publicHandTree\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment publicHandProperties on PublicHand {\n  id\n  team\n  declared\n  bid\n  ...cu\n}"): (typeof documents)["fragment publicHandProperties on PublicHand {\n  id\n  team\n  declared\n  bid\n  ...cu\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment publicHandTree on PublicHand {\n  ...publicHandProperties\n  round {\n    id\n  }\n  player {\n    ...playerTree\n  }\n}"): (typeof documents)["fragment publicHandTree on PublicHand {\n  ...publicHandProperties\n  round {\n    id\n  }\n  player {\n    ...playerTree\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment playerProperties on Player {\n  id\n  seat\n  dealer\n  ...cu\n}"): (typeof documents)["fragment playerProperties on Player {\n  id\n  seat\n  dealer\n  ...cu\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment playerTree on Player {\n  ...playerProperties\n  game {\n    id\n  }\n  user {\n    id\n    name\n  }\n}"): (typeof documents)["fragment playerTree on Player {\n  ...playerProperties\n  game {\n    id\n  }\n  user {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment resultProperties on RoundResult {\n  id\n  team\n  trickCount\n  scoreObtained\n  scoreTarget\n  points {\n    winning\n    teamCalls {\n      re\n      ko\n    }\n    underCalls {\n      re {\n        ...sq\n      }\n      ko {\n        ...sq\n      }\n    }\n    lostScore {\n      ...sq\n    }\n    special {\n      charly\n      doppelkopf\n      opposition\n    }\n  }\n  ...cu\n}"): (typeof documents)["fragment resultProperties on RoundResult {\n  id\n  team\n  trickCount\n  scoreObtained\n  scoreTarget\n  points {\n    winning\n    teamCalls {\n      re\n      ko\n    }\n    underCalls {\n      re {\n        ...sq\n      }\n      ko {\n        ...sq\n      }\n    }\n    lostScore {\n      ...sq\n    }\n    special {\n      charly\n      doppelkopf\n      opposition\n    }\n  }\n  ...cu\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment roundProperties on Round {\n  id\n  number\n  contract\n  state\n  result {\n    re {\n      ...resultProperties\n    }\n    ko {\n      ...resultProperties\n    }\n  }\n  ...cu\n  ...se\n}"): (typeof documents)["fragment roundProperties on Round {\n  id\n  number\n  contract\n  state\n  result {\n    re {\n      ...resultProperties\n    }\n    ko {\n      ...resultProperties\n    }\n  }\n  ...cu\n  ...se\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment roundTree on Round {\n  ...roundProperties\n  game {\n    id\n  }\n  dealer {\n    ...playerTree\n  }\n  hand {\n    ...privateHandTree\n  }\n  hands {\n    ...publicHandTree\n  }\n  calls {\n    ...callTree\n  }\n  tricks {\n    ...trickTree\n  }\n  currentTrick {\n    ...trickTree\n  }\n  turns {\n    ...turnTree\n  }\n}"): (typeof documents)["fragment roundTree on Round {\n  ...roundProperties\n  game {\n    id\n  }\n  dealer {\n    ...playerTree\n  }\n  hand {\n    ...privateHandTree\n  }\n  hands {\n    ...publicHandTree\n  }\n  calls {\n    ...callTree\n  }\n  tricks {\n    ...trickTree\n  }\n  currentTrick {\n    ...trickTree\n  }\n  turns {\n    ...turnTree\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment trickProperties on Trick {\n  id\n  number\n  state\n  demand\n  openIndex\n  leadingCardIndex\n  cards\n  score\n  ...cu\n  ...se\n}"): (typeof documents)["fragment trickProperties on Trick {\n  id\n  number\n  state\n  demand\n  openIndex\n  leadingCardIndex\n  cards\n  score\n  ...cu\n  ...se\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment trickTree on Trick {\n  ...trickProperties\n  winner {\n    ...publicHandTree\n  }\n}"): (typeof documents)["fragment trickTree on Trick {\n  ...trickProperties\n  winner {\n    ...publicHandTree\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment turnProperties on Turn {\n  id\n  number\n  card\n  ...cu\n}"): (typeof documents)["fragment turnProperties on Turn {\n  id\n  number\n  card\n  ...cu\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment turnTree on Turn {\n  ...turnProperties\n  round {\n    id\n  }\n  hand {\n    id\n  }\n  trick {\n    id\n  }\n}"): (typeof documents)["fragment turnTree on Turn {\n  ...turnProperties\n  round {\n    id\n  }\n  hand {\n    id\n  }\n  trick {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation makeCall($handId: ID!, $callType: CallType!) {\n  makeCall(makeCallInput: {callType: $callType, handId: $handId}) {\n    ...callProperties\n  }\n}"): (typeof documents)["mutation makeCall($handId: ID!, $callType: CallType!) {\n  makeCall(makeCallInput: {callType: $callType, handId: $handId}) {\n    ...callProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createGame($playerLimit: Int!, $seed: ByteArray) {\n  createGame(createGameInput: {playerLimit: $playerLimit, seed: $seed}) {\n    ...gameProperties\n  }\n}"): (typeof documents)["mutation createGame($playerLimit: Int!, $seed: ByteArray) {\n  createGame(createGameInput: {playerLimit: $playerLimit, seed: $seed}) {\n    ...gameProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation startGame($gameId: ID!) {\n  startGame(gameId: $gameId) {\n    ...gameProperties\n  }\n}"): (typeof documents)["mutation startGame($gameId: ID!) {\n  startGame(gameId: $gameId) {\n    ...gameProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation bidHand($handId: ID!, $bidding: BiddingOption!) {\n  bid(bidInput: {handId: $handId, bid: $bidding}) {\n    ...privateHandProperties\n  }\n}"): (typeof documents)["mutation bidHand($handId: ID!, $bidding: BiddingOption!) {\n  bid(bidInput: {handId: $handId, bid: $bidding}) {\n    ...privateHandProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation declareHand($handId: ID!, $declaration: DeclarationOption!) {\n  declare(declareInput: {handId: $handId, declaration: $declaration}) {\n    ...privateHandProperties\n  }\n}"): (typeof documents)["mutation declareHand($handId: ID!, $declaration: DeclarationOption!) {\n  declare(declareInput: {handId: $handId, declaration: $declaration}) {\n    ...privateHandProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation joinGame($gameId: ID!, $seat: Int!) {\n  joinGame(joinGameInput: {gameId: $gameId, seat: $seat}) {\n    ...playerProperties\n  }\n}"): (typeof documents)["mutation joinGame($gameId: ID!, $seat: Int!) {\n  joinGame(joinGameInput: {gameId: $gameId, seat: $seat}) {\n    ...playerProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createRound($gameId: ID!) {\n  createRound(gameId: $gameId) {\n    ...roundProperties\n  }\n}"): (typeof documents)["mutation createRound($gameId: ID!) {\n  createRound(gameId: $gameId) {\n    ...roundProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation playCard($roundId: ID!, $card: String!) {\n  playCard(playCardInput: {roundId: $roundId, card: $card}) {\n    ...turnProperties\n  }\n}"): (typeof documents)["mutation playCard($roundId: ID!, $card: String!) {\n  playCard(playCardInput: {roundId: $roundId, card: $card}) {\n    ...turnProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCall($id: ID!) {\n  call(id: $id) {\n    ...callProperties\n  }\n}"): (typeof documents)["query getCall($id: ID!) {\n  call(id: $id) {\n    ...callProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getGame($id: ID!) {\n  game(id: $id) {\n    ...gameProperties\n  }\n}"): (typeof documents)["query getGame($id: ID!) {\n  game(id: $id) {\n    ...gameProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getGameList {\n  games {\n    ...gameProperties\n  }\n}"): (typeof documents)["query getGameList {\n  games {\n    ...gameProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getGameTree($id: ID!) {\n  game(id: $id) {\n    ...gameTree\n  }\n}"): (typeof documents)["query getGameTree($id: ID!) {\n  game(id: $id) {\n    ...gameTree\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getPrivateHand($id: ID!) {\n  privateHand(id: $id) {\n    ...privateHandProperties\n  }\n}"): (typeof documents)["query getPrivateHand($id: ID!) {\n  privateHand(id: $id) {\n    ...privateHandProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getPublicHand($id: ID!) {\n  publicHand(id: $id) {\n    ...publicHandProperties\n  }\n}"): (typeof documents)["query getPublicHand($id: ID!) {\n  publicHand(id: $id) {\n    ...publicHandProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getPlayer($id: ID!) {\n  player(id: $id) {\n    ...playerProperties\n  }\n}"): (typeof documents)["query getPlayer($id: ID!) {\n  player(id: $id) {\n    ...playerProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getRound($id: ID!) {\n  round(id: $id) {\n    ...roundProperties\n  }\n}"): (typeof documents)["query getRound($id: ID!) {\n  round(id: $id) {\n    ...roundProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getRoundTree($id: ID!) {\n  round(id: $id) {\n    ...roundTree\n  }\n}"): (typeof documents)["query getRoundTree($id: ID!) {\n  round(id: $id) {\n    ...roundTree\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTrick($id: ID!) {\n  trick(id: $id) {\n    ...trickProperties\n  }\n}"): (typeof documents)["query getTrick($id: ID!) {\n  trick(id: $id) {\n    ...trickProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTurn($id: ID!) {\n  turn(id: $id) {\n    ...turnProperties\n  }\n}"): (typeof documents)["query getTurn($id: ID!) {\n  turn(id: $id) {\n    ...turnProperties\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query privateUser {\n  privateUser {\n    id\n    name\n    ...cu\n  }\n}"): (typeof documents)["query privateUser {\n  privateUser {\n    id\n    name\n    ...cu\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query publicUser($id: ID!) {\n  publicUser(id: $id) {\n    name\n    id\n  }\n}"): (typeof documents)["query publicUser($id: ID!) {\n  publicUser(id: $id) {\n    name\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;