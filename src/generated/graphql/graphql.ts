/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Array of bytes. */
  ByteArray: { input: any; output: any; }
  /** Instant in time. */
  Instant: { input: any; output: any; }
};

/**
 * 
 * Send this to make the bid on the hand given by the specified id.
 * Only possible if the specified hand belongs to the user.
 */
export type BidInput = {
  bid: BiddingOption;
  handId: Scalars['ID']['input'];
};

/**
 * 
 * The bids the player can make for their hands.
 * This enum is used for the communication into the system. It prevents the usage of NOTHING.
 */
export enum BiddingOption {
  Marriage = 'MARRIAGE',
  SoloClubs = 'SOLO_CLUBS',
  SoloDiamonds = 'SOLO_DIAMONDS',
  SoloFree = 'SOLO_FREE',
  SoloHearts = 'SOLO_HEARTS',
  SoloJacks = 'SOLO_JACKS',
  SoloQueens = 'SOLO_QUEENS',
  SoloSpades = 'SOLO_SPADES'
}

/**
 * 
 * The public bids that are derived from the bids the players can make for their hands.
 * This enum is used for the communication out of the system.
 */
export enum BiddingPublic {
  Marriage = 'MARRIAGE',
  Nothing = 'NOTHING',
  SoloClubs = 'SOLO_CLUBS',
  SoloDiamonds = 'SOLO_DIAMONDS',
  SoloFree = 'SOLO_FREE',
  SoloHearts = 'SOLO_HEARTS',
  SoloJacks = 'SOLO_JACKS',
  SoloQueens = 'SOLO_QUEENS',
  SoloSpades = 'SOLO_SPADES'
}

export type Call = HasCreatedUpdated & {
  __typename?: 'Call';
  /**
   * 
   * The type of this call.
   */
  callType: CallType;
  /**
   * 
   * The number of cards tha hand had already played when this call was made.
   */
  cardsPlayedBefore: Scalars['Int']['output'];
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * The description of this call.
   */
  description: Scalars['String']['output'];
  /**
   * 
   * The hand this call was made by.
   */
  hand: PublicHand;
  /**
   * 
   * The UUID of this call.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The round this call was made in.
   */
  round: Round;
};

/**
 * 
 * The different types of calls that can be made.
 */
export enum CallType {
  NoTricks = 'NO_TRICKS',
  Under_30 = 'UNDER_30',
  Under_60 = 'UNDER_60',
  Under_90 = 'UNDER_90',
  Under_120 = 'UNDER_120'
}

/**
 * 
 * The first card of each trick defined the [CardDemand] that MUST be satisfied by a hand, if it can.
 */
export enum CardDemand {
  Clubs = 'CLUBS',
  Colored = 'COLORED',
  Diamond = 'DIAMOND',
  Hearts = 'HEARTS',
  Spades = 'SPADES'
}

/**
 * 
 * Send this to create a new game.
 */
export type CreateGameInput = {
  /**
   * 
   * How many players are at most allowed to join the game.
   */
  playerLimit: Scalars['Int']['input'];
  /**
   * 
   * The seed to use for the game encoded as Base64. If null, a random seed is generated
   */
  seed?: InputMaybe<Scalars['ByteArray']['input']>;
};

/**
 * 
 * Object metadata that tracks when an object was created and updated.
 */
export type CreatedUpdated = {
  __typename?: 'CreatedUpdated';
  /**
   * 
   * The object was created at this moment.
   */
  created: Scalars['Instant']['output'];
  /**
   * 
   * The object was updated the last time at this moment.
   */
  updated: Scalars['Instant']['output'];
};

/**
 * 
 * The declaration options the player can make on their hands.
 * This enum is used for the communication into the system. It prevents the usage of NOTHING and offers the SILENT_MARRIAGE
 * option that is hidden to the outside in DeclarationPublic.
 */
export enum DeclarationOption {
  Healthy = 'HEALTHY',
  Reservation = 'RESERVATION',
  SilentMarriage = 'SILENT_MARRIAGE'
}

/**
 * 
 * The public declarations that are derived from the declarations the players can make for their hands.
 * This enum hides the SILENT_MARRIAGE option from the public.
 */
export enum DeclarationPublic {
  Healthy = 'HEALTHY',
  Nothing = 'NOTHING',
  Reservation = 'RESERVATION'
}

/**
 * 
 * Send this to make the declaration on the hand given by the specified id.
 * Only possible if the specified hand belongs to the user.
 */
export type DeclareInput = {
  declaration: DeclarationOption;
  handId: Scalars['ID']['input'];
};

/**
 * 
 * The Doppelkopf game has two teams playing against each other, RE and KO.
 * This enum only allows these two options to reflect objects that can only have a definite Team assigned.
 */
export enum DefiniteTeam {
  Ko = 'KO',
  Re = 'RE'
}

/**
 * 
 * Information about a game of Doppelkopf.
 */
export type Game = HasCreatedUpdated & HasStartedEnded & {
  __typename?: 'Game';
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * The current active round of this game if there is one, otherwise null.
   */
  currentRound?: Maybe<Round>;
  /**
   * 
   * "The UUID of this game."
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The player of the current user if they are playing in this game, otherwise null.
   */
  player?: Maybe<Player>;
  /**
   * 
   * How many players are at most allowed to join this game.
   */
  playerLimit: Scalars['Int']['output'];
  /**
   * 
   * The players of this game.
   */
  players: Array<Player>;
  /**
   * 
   * The rounds of this game.
   */
  rounds: Array<Round>;
  /**
   * 
   * The started and ended moments of this game.
   */
  se: StartedEnded;
  /**
   * 
   * The current state of this game.
   */
  state: GameState;
};

/**
 * 
 * Indicates the current phase the game is in.
 */
export enum GameState {
  Initialized = 'INITIALIZED',
  PlayingRound = 'PLAYING_ROUND',
  WaitingForDeal = 'WAITING_FOR_DEAL'
}

/**
 * 
 * Common interface for all types that provide CreatedUpdated time instant information.
 */
export type HasCreatedUpdated = {
  cu?: Maybe<CreatedUpdated>;
};

/**
 * 
 * Common interface for all types that provide StartedEnded time instant information.
 */
export type HasStartedEnded = {
  se?: Maybe<StartedEnded>;
};

/**
 * 
 * Join a game at the specified seat as player.
 */
export type JoinGameInput = {
  /**
   * 
   * The UUID of the game to join.
   */
  gameId: Scalars['ID']['input'];
  /**
   * 
   * The seat position to take.
   */
  seat: Scalars['Int']['input'];
};

/**
 * 
 * Send this to make a call for the hand specified by id.
 */
export type MakeCallInput = {
  callType: CallType;
  handId: Scalars['ID']['input'];
};

/**
 * 
 * All mutations this graphQL API supports.
 */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * 
   * Make a bid for the hand based on the provided data.
   */
  bid: PrivateHand;
  /**
   * 
   * Create a new game based on the provided data.
   */
  createGame: Game;
  /**
   * 
   * Deal cards in the specified game to create a new round.
   */
  createRound: Round;
  /**
   * 
   * Make a declare for the hand based on the provided data.
   */
  declare: PrivateHand;
  /**
   * 
   * Join a game as user to create a new player.
   */
  joinGame: Player;
  /**
   * 
   * Make a call in the round based on the provided data.
   */
  makeCall: Call;
  /**
   * 
   * Play a card in the round based on the provided data.
   */
  playCard: Turn;
  /**
   * 
   * Start the game with the specified id.
   */
  startGame: Game;
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationBidArgs = {
  bidInput?: InputMaybe<BidInput>;
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationCreateGameArgs = {
  createGameInput: CreateGameInput;
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationCreateRoundArgs = {
  gameId: Scalars['ID']['input'];
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationDeclareArgs = {
  declareInput?: InputMaybe<DeclareInput>;
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationJoinGameArgs = {
  joinGameInput: JoinGameInput;
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationMakeCallArgs = {
  makeCallInput?: InputMaybe<MakeCallInput>;
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationPlayCardArgs = {
  playCardInput?: InputMaybe<PlayCardInput>;
};


/**
 * 
 * All mutations this graphQL API supports.
 */
export type MutationStartGameArgs = {
  gameId: Scalars['ID']['input'];
};

/**
 * 
 * Send this to play the card in the round with the specified id.
 */
export type PlayCardInput = {
  /**
   * 
   * The card you want to play.
   * Must be one of the remaining cards on your hand.
   */
  card: Scalars['String']['input'];
  /**
   * 
   * The UUID of the round to play the card in.
   */
  roundId: Scalars['ID']['input'];
};

/**
 * 
 * Information about the player, that is a user in a game.
 */
export type Player = HasCreatedUpdated & {
  __typename?: 'Player';
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * Is this player is the current dealer in the game.
   */
  dealer: Scalars['Boolean']['output'];
  /**
   * 
   * The game this player is playing in.
   */
  game: Game;
  /**
   * 
   * The UUID of this player.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The number of the seat this player is sitting on in the game.
   */
  seat: Scalars['Int']['output'];
  /**
   * 
   * The user that is playing in the game as this player.
   */
  user: PublicUser;
};

/**
 * 
 * The points divided in multiple categories.
 */
export type PointsResult = {
  __typename?: 'PointsResult';
  lostScore: ScoreQuadruple;
  special: PointsResultSpecial;
  teamCalls: PointsResultTeamCalls;
  underCalls: PointsResultUnderCalls;
  winning: Scalars['Int']['output'];
};

/**
 * 
 * These special points can only be obtained when the round is played according to the NORMAL or MARRIAGE contract.
 */
export type PointsResultSpecial = {
  __typename?: 'PointsResultSpecial';
  /**
   * 
   * If the last trick is won with Jack of Clubs (charly), the team scoring this trick gets 1 extra point.
   */
  charly: Scalars['Int']['output'];
  /**
   * 
   * Each trick that has 40 or more score, give the team that scored this trick 1 extra point.
   */
  doppelkopf: Scalars['Int']['output'];
  /**
   * 
   * If KO wins against RE, they get an extra point.
   */
  opposition: Scalars['Int']['output'];
};

/**
 * 
 * The points for the team calls of each teams.
 */
export type PointsResultTeamCalls = {
  __typename?: 'PointsResultTeamCalls';
  /**
   * 
   * The winner gets 2 points if KO made their team call.
   */
  ko: Scalars['Int']['output'];
  /**
   * 
   * The winner gets 2 points if RE made their team call.
   */
  re: Scalars['Int']['output'];
};

/**
 * 
 * The points for the under calls of each team.
 */
export type PointsResultUnderCalls = {
  __typename?: 'PointsResultUnderCalls';
  /**
   * 
   * The winner gets 1 point for each under call made by KO team.
   */
  ko: ScoreQuadruple;
  /**
   * 
   * The winner gets 1 point for each under call made by RE team.
   */
  re: ScoreQuadruple;
};

/**
 * 
 * Private information about a hand.
 * This is only available to the owner of the hand.
 */
export type PrivateHand = {
  __typename?: 'PrivateHand';
  /**
   * 
   * The cards that were already played by this hand.
   */
  cardsPlayed: Array<Scalars['String']['output']>;
  /**
   * 
   * The cards that this hand has still to play.
   */
  cardsRemaining: Array<Scalars['String']['output']>;
  /**
   * 
   * The UUID of this hand.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The public information about this hand.
   */
  public: PublicHand;
  /**
   * 
   * The team this hands plays on, from the viewpoint of the player of this hand.
   */
  team: Team;
};

/**
 * 
 * Information about a user that is only available to that user themselves.
 */
export type PrivateUser = HasCreatedUpdated & {
  __typename?: 'PrivateUser';
  cu: CreatedUpdated;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/**
 * 
 * Public information about a hand.
 */
export type PublicHand = HasCreatedUpdated & {
  __typename?: 'PublicHand';
  /**
   * 
   * The bid of this hand if it was already made.
   */
  bid: BiddingPublic;
  /**
   * 
   * The calls made by this hand.
   */
  calls: Array<Call>;
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * The declaration of this hand if it was already made.
   */
  declared: DeclarationPublic;
  /**
   * 
   * The UUID of this hand.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The player this hand is played by.
   */
  player: Player;
  /**
   * 
   * The round this hand is played in.
   */
  round: Round;
  /**
   * 
   * The team this hands plays on, from the viewpoint of other players in the game.
   */
  team: Team;
};

/**
 * 
 * Information about a user that is available to all other users.
 */
export type PublicUser = {
  __typename?: 'PublicUser';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/**
 * 
 * All queries this graphQL API supports.
 */
export type Query = {
  __typename?: 'Query';
  /**
   * 
   * Get information about the call with the specified id.
   */
  call: Call;
  /**
   * 
   * Get information about the game with the specified id.
   */
  game: Game;
  /**
   * 
   * Get all games currently available.
   */
  games: Array<Game>;
  /**
   * 
   * Get information about the player with the specified id.
   */
  player: Player;
  /**
   * 
   * Get the private information about the hand with the specified id.
   * This can only be used by the owner of the hand.
   */
  privateHand: PrivateHand;
  /**
   * 
   * Gets detailed information about the current user.
   */
  privateUser: PrivateUser;
  /**
   * 
   * Get the public information about the hand with the specified id.
   */
  publicHand: PublicHand;
  /**
   * 
   * Gets the public information about the user with the specified id.
   */
  publicUser: PublicUser;
  /**
   * 
   * Get information about the round with the specified id.
   */
  round: Round;
  /**
   * 
   * Get information about the trick with the specified id.
   */
  trick: Trick;
  /**
   * 
   * Get information about the turn with the specified id.
   */
  turn: Turn;
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryCallArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryGameArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryPrivateHandArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryPublicHandArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryPublicUserArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryRoundArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryTrickArgs = {
  id: Scalars['ID']['input'];
};


/**
 * 
 * All queries this graphQL API supports.
 */
export type QueryTurnArgs = {
  id: Scalars['ID']['input'];
};

/**
 * 
 * Information about a round in a game of Doppelkopf.
 */
export type Round = HasCreatedUpdated & HasStartedEnded & {
  __typename?: 'Round';
  /**
   * 
   * The calls made in this round.
   */
  calls: Array<Call>;
  /**
   * 
   * The public contract information of the round.
   */
  contract: RoundContractPublic;
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * The current active trick of this round if there is one, otherwise null.
   */
  currentTrick?: Maybe<Trick>;
  /**
   * 
   * The player that dealt this round.
   */
  dealer: Player;
  /**
   * 
   * The game this round is played in.
   */
  game: Game;
  /**
   * 
   * The private information about the hand.
   * This shows the hand of the player, if the authenticated user has a hand in this round. Otherwise null.
   */
  hand?: Maybe<PrivateHand>;
  /**
   * 
   * The public information about the hands of the players.
   */
  hands?: Maybe<Array<PublicHand>>;
  /**
   * 
   * The UUID of this round.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The number of this round, incrementally starting at 1.
   */
  number: Scalars['Int']['output'];
  /**
   * 
   * The result of this round if available, otherwise null.
   */
  result?: Maybe<TeamedResult>;
  /**
   * 
   * The started and ended moments of this game.
   */
  se: StartedEnded;
  /**
   * 
   * The current state of the round.
   */
  state: RoundState;
  /**
   * 
   * The tricks of this round.
   */
  tricks: Array<Trick>;
  /**
   * 
   * The turns made in this round.
   */
  turns: Array<Turn>;
};

/**
 * 
 * Indicates the specific variant of the round that is played based on the game rules.
 * This enum hides the SILENT_MARRIAGE option from the public.
 */
export enum RoundContractPublic {
  MarriageResolved = 'MARRIAGE_RESOLVED',
  MarriageSolo = 'MARRIAGE_SOLO',
  MarriageUnresolved = 'MARRIAGE_UNRESOLVED',
  Normal = 'NORMAL',
  Solo = 'SOLO',
  Undecided = 'UNDECIDED'
}

/**
 * 
 * Information about a result of a round in a game of Doppelkopf.
 */
export type RoundResult = HasCreatedUpdated & {
  __typename?: 'RoundResult';
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * The UUID of this result.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The points awarded to this team.
   */
  points: PointsResult;
  /**
   * 
   * The round this result is from.
   */
  round: Round;
  /**
   * 
   * The total score this team obtained.
   */
  scoreObtained: Scalars['Int']['output'];
  /**
   * 
   * The target score this team must obtain.
   */
  scoreTarget: Scalars['Int']['output'];
  /**
   * 
   * The team this result is for.
   */
  team: DefiniteTeam;
  /**
   * 
   * The number of tricks this team obtained.
   */
  trickCount: Scalars['Int']['output'];
};

/**
 * 
 * Indicates the current phase the round is in.
 */
export enum RoundState {
  Evaluated = 'EVALUATED',
  PlayingTricks = 'PLAYING_TRICKS',
  WaitingForBids = 'WAITING_FOR_BIDS',
  WaitingForDeclarations = 'WAITING_FOR_DECLARATIONS'
}

/**
 * 
 * There are multiple aspects of Doppelkopf using the 4 levels (90, 60, 30, 0), e.g. calls, score level.
 * This type allows us to have a simple representation of these aspects.
 */
export type ScoreQuadruple = {
  __typename?: 'ScoreQuadruple';
  p00: Scalars['Int']['output'];
  p30: Scalars['Int']['output'];
  p60: Scalars['Int']['output'];
  p90: Scalars['Int']['output'];
};

/**
 * 
 * Object metadata that tracks when an object was started and ended.
 */
export type StartedEnded = {
  __typename?: 'StartedEnded';
  /**
   * 
   * The parent object was ended at this moment. If this is null, the parent object was not ended yet.
   */
  ended?: Maybe<Scalars['Instant']['output']>;
  /**
   * 
   * The parent object was started at this moment. If this is null, the parent object was not started yet.
   */
  started?: Maybe<Scalars['Instant']['output']>;
};

/**
 * 
 * The Doppelkopf game has two teams playing against each other, RE and KO.
 * This enum allows for the NA option if the team is not yet known.
 */
export enum Team {
  Ko = 'KO',
  Na = 'NA',
  Re = 'RE'
}

/**
 * 
 * Results tagged with the corresponding team.
 */
export type TeamedResult = {
  __typename?: 'TeamedResult';
  /**
   * 
   * Result of the ko team.
   */
  ko: RoundResult;
  /**
   * 
   * Result of the re team.
   */
  re: RoundResult;
};

/**
 * 
 * Information about a Trick in a round of Doppelkopf.
 */
export type Trick = HasCreatedUpdated & HasStartedEnded & {
  __typename?: 'Trick';
  /**
   * 
   * The cards that this trick currently contains in order.
   */
  cards: Array<Scalars['String']['output']>;
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * The demand of this trick.
   */
  demand: CardDemand;
  /**
   * 
   * The UUID of this trick.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The index of the currently leading card of this trick with respect to the cards list.
   */
  leadingCardIndex: Scalars['Int']['output'];
  /**
   * 
   * The number of this trick with respect to the round.
   */
  number: Scalars['Int']['output'];
  /**
   * 
   * The index of the hand that played the first card of this hand.
   */
  openIndex: Scalars['Int']['output'];
  /**
   * 
   * The round this trick is played in.
   */
  round: Round;
  /**
   * 
   * The current score of this trick.
   */
  score: Scalars['Int']['output'];
  /**
   * 
   * The started and ended moments of this game.
   */
  se: StartedEnded;
  /**
   * 
   * The current state of this trick.
   */
  state: TrickState;
  /**
   * 
   * The winner of this trick if known, otherwise null.
   */
  winner?: Maybe<PublicHand>;
};

/**
 * 
 * Indicates the current phase the trick is in.
 */
export enum TrickState {
  FirstCardPlayed = 'FIRST_CARD_PLAYED',
  FourthCardPlayed = 'FOURTH_CARD_PLAYED',
  SecondCardPlayed = 'SECOND_CARD_PLAYED',
  ThirdCardPlayed = 'THIRD_CARD_PLAYED'
}

/**
 * 
 * Information about a turn in a round and trick of Doppelkopf.
 */
export type Turn = HasCreatedUpdated & {
  __typename?: 'Turn';
  /**
   * 
   * The card played in this turn.
   */
  card: Scalars['String']['output'];
  /**
   * 
   * The created and updated meta data of this game.
   */
  cu: CreatedUpdated;
  /**
   * 
   * The the hand this turn is made by.
   */
  hand: PublicHand;
  /**
   * 
   * The UUID of this turn.
   */
  id: Scalars['ID']['output'];
  /**
   * 
   * The number of this turn, incrementally starting at 1.
   */
  number: Scalars['Int']['output'];
  /**
   * 
   * The round this turn is made in.
   */
  round: Round;
  /**
   * 
   * The trick this turn is made in.
   */
  trick: Trick;
};

export type CallPropertiesFragment = (
  { __typename?: 'Call', id: string, callType: CallType, cardsPlayedBefore: number, description: string }
  & { ' $fragmentRefs'?: { 'Cu_Call_Fragment': Cu_Call_Fragment } }
) & { ' $fragmentName'?: 'CallPropertiesFragment' };

export type CallTreeFragment = (
  { __typename?: 'Call', hand: { __typename?: 'PublicHand', id: string }, round: { __typename?: 'Round', id: string } }
  & { ' $fragmentRefs'?: { 'CallPropertiesFragment': CallPropertiesFragment } }
) & { ' $fragmentName'?: 'CallTreeFragment' };

type Cu_Call_Fragment = { __typename?: 'Call', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_Call_Fragment' };

type Cu_Game_Fragment = { __typename?: 'Game', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_Game_Fragment' };

type Cu_Player_Fragment = { __typename?: 'Player', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_Player_Fragment' };

type Cu_PrivateUser_Fragment = { __typename?: 'PrivateUser', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_PrivateUser_Fragment' };

type Cu_PublicHand_Fragment = { __typename?: 'PublicHand', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_PublicHand_Fragment' };

type Cu_Round_Fragment = { __typename?: 'Round', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_Round_Fragment' };

type Cu_RoundResult_Fragment = { __typename?: 'RoundResult', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_RoundResult_Fragment' };

type Cu_Trick_Fragment = { __typename?: 'Trick', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_Trick_Fragment' };

type Cu_Turn_Fragment = { __typename?: 'Turn', cu: { __typename?: 'CreatedUpdated', created: any, updated: any } } & { ' $fragmentName'?: 'Cu_Turn_Fragment' };

export type CuFragment = Cu_Call_Fragment | Cu_Game_Fragment | Cu_Player_Fragment | Cu_PrivateUser_Fragment | Cu_PublicHand_Fragment | Cu_Round_Fragment | Cu_RoundResult_Fragment | Cu_Trick_Fragment | Cu_Turn_Fragment;

type Se_Game_Fragment = { __typename?: 'Game', se: { __typename?: 'StartedEnded', started?: any | null, ended?: any | null } } & { ' $fragmentName'?: 'Se_Game_Fragment' };

type Se_Round_Fragment = { __typename?: 'Round', se: { __typename?: 'StartedEnded', started?: any | null, ended?: any | null } } & { ' $fragmentName'?: 'Se_Round_Fragment' };

type Se_Trick_Fragment = { __typename?: 'Trick', se: { __typename?: 'StartedEnded', started?: any | null, ended?: any | null } } & { ' $fragmentName'?: 'Se_Trick_Fragment' };

export type SeFragment = Se_Game_Fragment | Se_Round_Fragment | Se_Trick_Fragment;

export type SqFragment = { __typename?: 'ScoreQuadruple', p90: number, p60: number, p30: number, p00: number } & { ' $fragmentName'?: 'SqFragment' };

export type GamePropertiesFragment = (
  { __typename?: 'Game', id: string, playerLimit: number, state: GameState }
  & { ' $fragmentRefs'?: { 'Cu_Game_Fragment': Cu_Game_Fragment;'Se_Game_Fragment': Se_Game_Fragment } }
) & { ' $fragmentName'?: 'GamePropertiesFragment' };

export type GameTreeFragment = (
  { __typename?: 'Game', players: Array<(
    { __typename?: 'Player' }
    & { ' $fragmentRefs'?: { 'PlayerTreeFragment': PlayerTreeFragment } }
  )>, player?: (
    { __typename?: 'Player' }
    & { ' $fragmentRefs'?: { 'PlayerTreeFragment': PlayerTreeFragment } }
  ) | null, rounds: Array<(
    { __typename?: 'Round' }
    & { ' $fragmentRefs'?: { 'RoundTreeFragment': RoundTreeFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'GamePropertiesFragment': GamePropertiesFragment } }
) & { ' $fragmentName'?: 'GameTreeFragment' };

export type PrivateHandPropertiesFragment = { __typename?: 'PrivateHand', id: string, team: Team, cardsPlayed: Array<string>, cardsRemaining: Array<string>, public: (
    { __typename?: 'PublicHand' }
    & { ' $fragmentRefs'?: { 'PublicHandPropertiesFragment': PublicHandPropertiesFragment } }
  ) } & { ' $fragmentName'?: 'PrivateHandPropertiesFragment' };

export type PrivateHandTreeFragment = { __typename?: 'PrivateHand', id: string, team: Team, cardsPlayed: Array<string>, cardsRemaining: Array<string>, public: (
    { __typename?: 'PublicHand' }
    & { ' $fragmentRefs'?: { 'PublicHandTreeFragment': PublicHandTreeFragment } }
  ) } & { ' $fragmentName'?: 'PrivateHandTreeFragment' };

export type PublicHandPropertiesFragment = (
  { __typename?: 'PublicHand', id: string, team: Team, declared: DeclarationPublic, bid: BiddingPublic }
  & { ' $fragmentRefs'?: { 'Cu_PublicHand_Fragment': Cu_PublicHand_Fragment } }
) & { ' $fragmentName'?: 'PublicHandPropertiesFragment' };

export type PublicHandTreeFragment = (
  { __typename?: 'PublicHand', round: { __typename?: 'Round', id: string }, player: (
    { __typename?: 'Player' }
    & { ' $fragmentRefs'?: { 'PlayerTreeFragment': PlayerTreeFragment } }
  ) }
  & { ' $fragmentRefs'?: { 'PublicHandPropertiesFragment': PublicHandPropertiesFragment } }
) & { ' $fragmentName'?: 'PublicHandTreeFragment' };

export type PlayerPropertiesFragment = (
  { __typename?: 'Player', id: string, seat: number, dealer: boolean }
  & { ' $fragmentRefs'?: { 'Cu_Player_Fragment': Cu_Player_Fragment } }
) & { ' $fragmentName'?: 'PlayerPropertiesFragment' };

export type PlayerTreeFragment = (
  { __typename?: 'Player', game: { __typename?: 'Game', id: string }, user: { __typename?: 'PublicUser', id: string, name: string } }
  & { ' $fragmentRefs'?: { 'PlayerPropertiesFragment': PlayerPropertiesFragment } }
) & { ' $fragmentName'?: 'PlayerTreeFragment' };

export type ResultPropertiesFragment = (
  { __typename?: 'RoundResult', id: string, team: DefiniteTeam, trickCount: number, scoreObtained: number, scoreTarget: number, points: { __typename?: 'PointsResult', winning: number, teamCalls: { __typename?: 'PointsResultTeamCalls', re: number, ko: number }, underCalls: { __typename?: 'PointsResultUnderCalls', re: (
        { __typename?: 'ScoreQuadruple' }
        & { ' $fragmentRefs'?: { 'SqFragment': SqFragment } }
      ), ko: (
        { __typename?: 'ScoreQuadruple' }
        & { ' $fragmentRefs'?: { 'SqFragment': SqFragment } }
      ) }, lostScore: (
      { __typename?: 'ScoreQuadruple' }
      & { ' $fragmentRefs'?: { 'SqFragment': SqFragment } }
    ), special: { __typename?: 'PointsResultSpecial', charly: number, doppelkopf: number, opposition: number } } }
  & { ' $fragmentRefs'?: { 'Cu_RoundResult_Fragment': Cu_RoundResult_Fragment } }
) & { ' $fragmentName'?: 'ResultPropertiesFragment' };

export type RoundPropertiesFragment = (
  { __typename?: 'Round', id: string, number: number, contract: RoundContractPublic, state: RoundState, result?: { __typename?: 'TeamedResult', re: (
      { __typename?: 'RoundResult' }
      & { ' $fragmentRefs'?: { 'ResultPropertiesFragment': ResultPropertiesFragment } }
    ), ko: (
      { __typename?: 'RoundResult' }
      & { ' $fragmentRefs'?: { 'ResultPropertiesFragment': ResultPropertiesFragment } }
    ) } | null }
  & { ' $fragmentRefs'?: { 'Cu_Round_Fragment': Cu_Round_Fragment;'Se_Round_Fragment': Se_Round_Fragment } }
) & { ' $fragmentName'?: 'RoundPropertiesFragment' };

export type RoundTreeFragment = (
  { __typename?: 'Round', game: { __typename?: 'Game', id: string }, dealer: (
    { __typename?: 'Player' }
    & { ' $fragmentRefs'?: { 'PlayerTreeFragment': PlayerTreeFragment } }
  ), hand?: (
    { __typename?: 'PrivateHand' }
    & { ' $fragmentRefs'?: { 'PrivateHandTreeFragment': PrivateHandTreeFragment } }
  ) | null, hands?: Array<(
    { __typename?: 'PublicHand' }
    & { ' $fragmentRefs'?: { 'PublicHandTreeFragment': PublicHandTreeFragment } }
  )> | null, calls: Array<(
    { __typename?: 'Call' }
    & { ' $fragmentRefs'?: { 'CallTreeFragment': CallTreeFragment } }
  )>, tricks: Array<(
    { __typename?: 'Trick' }
    & { ' $fragmentRefs'?: { 'TrickTreeFragment': TrickTreeFragment } }
  )>, currentTrick?: (
    { __typename?: 'Trick' }
    & { ' $fragmentRefs'?: { 'TrickTreeFragment': TrickTreeFragment } }
  ) | null, turns: Array<(
    { __typename?: 'Turn' }
    & { ' $fragmentRefs'?: { 'TurnTreeFragment': TurnTreeFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'RoundPropertiesFragment': RoundPropertiesFragment } }
) & { ' $fragmentName'?: 'RoundTreeFragment' };

export type TrickPropertiesFragment = (
  { __typename?: 'Trick', id: string, number: number, state: TrickState, demand: CardDemand, openIndex: number, leadingCardIndex: number, cards: Array<string>, score: number }
  & { ' $fragmentRefs'?: { 'Cu_Trick_Fragment': Cu_Trick_Fragment;'Se_Trick_Fragment': Se_Trick_Fragment } }
) & { ' $fragmentName'?: 'TrickPropertiesFragment' };

export type TrickTreeFragment = (
  { __typename?: 'Trick', winner?: (
    { __typename?: 'PublicHand' }
    & { ' $fragmentRefs'?: { 'PublicHandTreeFragment': PublicHandTreeFragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'TrickPropertiesFragment': TrickPropertiesFragment } }
) & { ' $fragmentName'?: 'TrickTreeFragment' };

export type TurnPropertiesFragment = (
  { __typename?: 'Turn', id: string, number: number, card: string }
  & { ' $fragmentRefs'?: { 'Cu_Turn_Fragment': Cu_Turn_Fragment } }
) & { ' $fragmentName'?: 'TurnPropertiesFragment' };

export type TurnTreeFragment = (
  { __typename?: 'Turn', round: { __typename?: 'Round', id: string }, hand: { __typename?: 'PublicHand', id: string }, trick: { __typename?: 'Trick', id: string } }
  & { ' $fragmentRefs'?: { 'TurnPropertiesFragment': TurnPropertiesFragment } }
) & { ' $fragmentName'?: 'TurnTreeFragment' };

export type MakeCallMutationVariables = Exact<{
  handId: Scalars['ID']['input'];
  callType: CallType;
}>;


export type MakeCallMutation = { __typename?: 'Mutation', makeCall: (
    { __typename?: 'Call' }
    & { ' $fragmentRefs'?: { 'CallPropertiesFragment': CallPropertiesFragment } }
  ) };

export type CreateGameMutationVariables = Exact<{
  playerLimit: Scalars['Int']['input'];
  seed?: InputMaybe<Scalars['ByteArray']['input']>;
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: (
    { __typename?: 'Game' }
    & { ' $fragmentRefs'?: { 'GamePropertiesFragment': GamePropertiesFragment } }
  ) };

export type StartGameMutationVariables = Exact<{
  gameId: Scalars['ID']['input'];
}>;


export type StartGameMutation = { __typename?: 'Mutation', startGame: (
    { __typename?: 'Game' }
    & { ' $fragmentRefs'?: { 'GamePropertiesFragment': GamePropertiesFragment } }
  ) };

export type BidHandMutationVariables = Exact<{
  handId: Scalars['ID']['input'];
  bidding: BiddingOption;
}>;


export type BidHandMutation = { __typename?: 'Mutation', bid: (
    { __typename?: 'PrivateHand' }
    & { ' $fragmentRefs'?: { 'PrivateHandPropertiesFragment': PrivateHandPropertiesFragment } }
  ) };

export type DeclareHandMutationVariables = Exact<{
  handId: Scalars['ID']['input'];
  declaration: DeclarationOption;
}>;


export type DeclareHandMutation = { __typename?: 'Mutation', declare: (
    { __typename?: 'PrivateHand' }
    & { ' $fragmentRefs'?: { 'PrivateHandPropertiesFragment': PrivateHandPropertiesFragment } }
  ) };

export type JoinGameMutationVariables = Exact<{
  gameId: Scalars['ID']['input'];
  seat: Scalars['Int']['input'];
}>;


export type JoinGameMutation = { __typename?: 'Mutation', joinGame: (
    { __typename?: 'Player' }
    & { ' $fragmentRefs'?: { 'PlayerPropertiesFragment': PlayerPropertiesFragment } }
  ) };

export type CreateRoundMutationVariables = Exact<{
  gameId: Scalars['ID']['input'];
}>;


export type CreateRoundMutation = { __typename?: 'Mutation', createRound: (
    { __typename?: 'Round' }
    & { ' $fragmentRefs'?: { 'RoundPropertiesFragment': RoundPropertiesFragment } }
  ) };

export type PlayCardMutationVariables = Exact<{
  roundId: Scalars['ID']['input'];
  card: Scalars['String']['input'];
}>;


export type PlayCardMutation = { __typename?: 'Mutation', playCard: (
    { __typename?: 'Turn' }
    & { ' $fragmentRefs'?: { 'TurnPropertiesFragment': TurnPropertiesFragment } }
  ) };

export type GetCallQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCallQuery = { __typename?: 'Query', call: (
    { __typename?: 'Call' }
    & { ' $fragmentRefs'?: { 'CallPropertiesFragment': CallPropertiesFragment } }
  ) };

export type GetGameQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetGameQuery = { __typename?: 'Query', game: (
    { __typename?: 'Game' }
    & { ' $fragmentRefs'?: { 'GamePropertiesFragment': GamePropertiesFragment } }
  ) };

export type GetGameListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGameListQuery = { __typename?: 'Query', games: Array<(
    { __typename?: 'Game' }
    & { ' $fragmentRefs'?: { 'GamePropertiesFragment': GamePropertiesFragment } }
  )> };

export type GetGameTreeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetGameTreeQuery = { __typename?: 'Query', game: (
    { __typename?: 'Game' }
    & { ' $fragmentRefs'?: { 'GameTreeFragment': GameTreeFragment } }
  ) };

export type GetPrivateHandQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPrivateHandQuery = { __typename?: 'Query', privateHand: (
    { __typename?: 'PrivateHand' }
    & { ' $fragmentRefs'?: { 'PrivateHandPropertiesFragment': PrivateHandPropertiesFragment } }
  ) };

export type GetPublicHandQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPublicHandQuery = { __typename?: 'Query', publicHand: (
    { __typename?: 'PublicHand' }
    & { ' $fragmentRefs'?: { 'PublicHandPropertiesFragment': PublicHandPropertiesFragment } }
  ) };

export type GetPlayerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPlayerQuery = { __typename?: 'Query', player: (
    { __typename?: 'Player' }
    & { ' $fragmentRefs'?: { 'PlayerPropertiesFragment': PlayerPropertiesFragment } }
  ) };

export type GetRoundQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRoundQuery = { __typename?: 'Query', round: (
    { __typename?: 'Round' }
    & { ' $fragmentRefs'?: { 'RoundPropertiesFragment': RoundPropertiesFragment } }
  ) };

export type GetRoundTreeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRoundTreeQuery = { __typename?: 'Query', round: (
    { __typename?: 'Round' }
    & { ' $fragmentRefs'?: { 'RoundTreeFragment': RoundTreeFragment } }
  ) };

export type GetTrickQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTrickQuery = { __typename?: 'Query', trick: (
    { __typename?: 'Trick' }
    & { ' $fragmentRefs'?: { 'TrickPropertiesFragment': TrickPropertiesFragment } }
  ) };

export type GetTurnQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTurnQuery = { __typename?: 'Query', turn: (
    { __typename?: 'Turn' }
    & { ' $fragmentRefs'?: { 'TurnPropertiesFragment': TurnPropertiesFragment } }
  ) };

export type PrivateUserQueryVariables = Exact<{ [key: string]: never; }>;


export type PrivateUserQuery = { __typename?: 'Query', privateUser: (
    { __typename?: 'PrivateUser', id: string, name: string }
    & { ' $fragmentRefs'?: { 'Cu_PrivateUser_Fragment': Cu_PrivateUser_Fragment } }
  ) };

export type PublicUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PublicUserQuery = { __typename?: 'Query', publicUser: { __typename?: 'PublicUser', name: string, id: string } };

export const CuFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<CuFragment, unknown>;
export const SeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}}]} as unknown as DocumentNode<SeFragment, unknown>;
export const GamePropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerLimit"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}}]} as unknown as DocumentNode<GamePropertiesFragment, unknown>;
export const PlayerPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<PlayerPropertiesFragment, unknown>;
export const PlayerTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<PlayerTreeFragment, unknown>;
export const SqFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}}]} as unknown as DocumentNode<SqFragment, unknown>;
export const ResultPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<ResultPropertiesFragment, unknown>;
export const RoundPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"contract"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}}]} as unknown as DocumentNode<RoundPropertiesFragment, unknown>;
export const PublicHandPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<PublicHandPropertiesFragment, unknown>;
export const PublicHandTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PublicHandTreeFragment, unknown>;
export const PrivateHandTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}}]}}]} as unknown as DocumentNode<PrivateHandTreeFragment, unknown>;
export const CallPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<CallPropertiesFragment, unknown>;
export const CallTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callProperties"}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<CallTreeFragment, unknown>;
export const TrickPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"demand"}},{"kind":"Field","name":{"kind":"Name","value":"openIndex"}},{"kind":"Field","name":{"kind":"Name","value":"leadingCardIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cards"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}}]} as unknown as DocumentNode<TrickPropertiesFragment, unknown>;
export const TrickTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickProperties"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"demand"}},{"kind":"Field","name":{"kind":"Name","value":"openIndex"}},{"kind":"Field","name":{"kind":"Name","value":"leadingCardIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cards"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}}]}}]} as unknown as DocumentNode<TrickTreeFragment, unknown>;
export const TurnPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<TurnPropertiesFragment, unknown>;
export const TurnTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<TurnTreeFragment, unknown>;
export const RoundTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"privateHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"calls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tricks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentTrick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"turns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"demand"}},{"kind":"Field","name":{"kind":"Name","value":"openIndex"}},{"kind":"Field","name":{"kind":"Name","value":"leadingCardIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cards"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"contract"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callProperties"}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickProperties"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RoundTreeFragment, unknown>;
export const GameTreeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gameProperties"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"contract"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callProperties"}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"demand"}},{"kind":"Field","name":{"kind":"Name","value":"openIndex"}},{"kind":"Field","name":{"kind":"Name","value":"leadingCardIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cards"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickProperties"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerLimit"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"privateHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"calls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tricks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentTrick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"turns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnTree"}}]}}]}}]} as unknown as DocumentNode<GameTreeFragment, unknown>;
export const PrivateHandPropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<PrivateHandPropertiesFragment, unknown>;
export const MakeCallDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"makeCall"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"callType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CallType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"makeCall"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"makeCallInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"callType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"callType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"handId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<MakeCallMutation, MakeCallMutationVariables>;
export const CreateGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"playerLimit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seed"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ByteArray"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createGameInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"playerLimit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"playerLimit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"seed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seed"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gameProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerLimit"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}}]} as unknown as DocumentNode<CreateGameMutation, CreateGameMutationVariables>;
export const StartGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"startGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gameProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerLimit"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}}]} as unknown as DocumentNode<StartGameMutation, StartGameMutationVariables>;
export const BidHandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"bidHand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bidding"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BiddingOption"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bidInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"handId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bidding"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"privateHandProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}}]}}]}}]} as unknown as DocumentNode<BidHandMutation, BidHandMutationVariables>;
export const DeclareHandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"declareHand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"declaration"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeclarationOption"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"declare"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"declareInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"handId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"declaration"},"value":{"kind":"Variable","name":{"kind":"Name","value":"declaration"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"privateHandProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}}]}}]}}]} as unknown as DocumentNode<DeclareHandMutation, DeclareHandMutationVariables>;
export const JoinGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"joinGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"joinGameInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"seat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seat"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<JoinGameMutation, JoinGameMutationVariables>;
export const CreateRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"contract"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}}]} as unknown as DocumentNode<CreateRoundMutation, CreateRoundMutationVariables>;
export const PlayCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"playCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"card"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"playCardInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"roundId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"card"},"value":{"kind":"Variable","name":{"kind":"Name","value":"card"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<PlayCardMutation, PlayCardMutationVariables>;
export const GetCallDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCall"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"call"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<GetCallQuery, GetCallQueryVariables>;
export const GetGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gameProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerLimit"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}}]} as unknown as DocumentNode<GetGameQuery, GetGameQueryVariables>;
export const GetGameListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGameList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gameProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerLimit"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}}]} as unknown as DocumentNode<GetGameListQuery, GetGameListQueryVariables>;
export const GetGameTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGameTree"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gameTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerLimit"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"contract"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callProperties"}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"demand"}},{"kind":"Field","name":{"kind":"Name","value":"openIndex"}},{"kind":"Field","name":{"kind":"Name","value":"leadingCardIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cards"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickProperties"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"privateHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"calls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tricks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentTrick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"turns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gameTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gameProperties"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundTree"}}]}}]}}]} as unknown as DocumentNode<GetGameTreeQuery, GetGameTreeQueryVariables>;
export const GetPrivateHandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPrivateHand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateHand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"privateHandProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}}]}}]}}]} as unknown as DocumentNode<GetPrivateHandQuery, GetPrivateHandQueryVariables>;
export const GetPublicHandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPublicHand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicHand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<GetPublicHandQuery, GetPublicHandQueryVariables>;
export const GetPlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<GetPlayerQuery, GetPlayerQueryVariables>;
export const GetRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"contract"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}}]} as unknown as DocumentNode<GetRoundQuery, GetRoundQueryVariables>;
export const GetRoundTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRoundTree"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"sq"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreQuadruple"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p90"}},{"kind":"Field","name":{"kind":"Name","value":"p60"}},{"kind":"Field","name":{"kind":"Name","value":"p30"}},{"kind":"Field","name":{"kind":"Name","value":"p00"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"resultProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoundResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"trickCount"}},{"kind":"Field","name":{"kind":"Name","value":"scoreObtained"}},{"kind":"Field","name":{"kind":"Name","value":"scoreTarget"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"winning"}},{"kind":"Field","name":{"kind":"Name","value":"teamCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"}},{"kind":"Field","name":{"kind":"Name","value":"ko"}}]}},{"kind":"Field","name":{"kind":"Name","value":"underCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lostScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"sq"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"charly"}},{"kind":"Field","name":{"kind":"Name","value":"doppelkopf"}},{"kind":"Field","name":{"kind":"Name","value":"opposition"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"contract"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"re"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"resultProperties"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seat"}},{"kind":"Field","name":{"kind":"Name","value":"dealer"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"playerTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"declared"}},{"kind":"Field","name":{"kind":"Name","value":"bid"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"privateHandTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateHand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayed"}},{"kind":"Field","name":{"kind":"Name","value":"cardsRemaining"}},{"kind":"Field","name":{"kind":"Name","value":"public"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"callType"}},{"kind":"Field","name":{"kind":"Name","value":"cardsPlayedBefore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"callTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Call"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callProperties"}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"demand"}},{"kind":"Field","name":{"kind":"Name","value":"openIndex"}},{"kind":"Field","name":{"kind":"Name","value":"leadingCardIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cards"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickProperties"}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnProperties"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"roundTree"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Round"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"roundProperties"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"playerTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"privateHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicHandTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"calls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"callTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tricks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentTrick"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickTree"}}]}},{"kind":"Field","name":{"kind":"Name","value":"turns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnTree"}}]}}]}}]} as unknown as DocumentNode<GetRoundTreeQuery, GetRoundTreeQueryVariables>;
export const GetTrickDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrick"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trick"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"trickProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"se"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasStartedEnded"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"se"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started"}},{"kind":"Field","name":{"kind":"Name","value":"ended"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"trickProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trick"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"demand"}},{"kind":"Field","name":{"kind":"Name","value":"openIndex"}},{"kind":"Field","name":{"kind":"Name","value":"leadingCardIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cards"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"se"}}]}}]} as unknown as DocumentNode<GetTrickQuery, GetTrickQueryVariables>;
export const GetTurnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTurn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"turn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"turnProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"turnProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Turn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]} as unknown as DocumentNode<GetTurnQuery, GetTurnQueryVariables>;
export const PrivateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"privateUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"cu"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cu"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HasCreatedUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<PrivateUserQuery, PrivateUserQueryVariables>;
export const PublicUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"publicUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PublicUserQuery, PublicUserQueryVariables>;