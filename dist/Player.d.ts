import { StarPower } from "./Brawler";
export interface PlayerClub {
    name: string;
    tag: string;
}
export interface RankingsPlayerClub {
    name: string;
}
export interface RankingsPlayer {
    club: RankingsPlayerClub;
    tag: string;
    name: string;
    trophies: number;
    rank: number;
    nameColor: string;
}
export interface PlayerBrawler {
    id: number;
    name: string;
    power: number;
    rank: number;
    trophies: number;
    highestTrophies: number;
    starPowers: StarPower[];
}
export interface PlayerBattlelog {
    battleTime: string;
    battle: PlayerBattle;
    event: PlayerBattlelogEvent;
}
export interface PlayerBattlelogResponse {
    items: PlayerBattlelog[];
}
export interface BattleBrawlerInfo {
    id: number;
    name: string;
    power: number;
    trophies: number;
}
export interface BattlePlayerInfo {
    tag: string;
    name: string;
    brawler: BattleBrawlerInfo;
}
export interface PlayerBattle {
    mode: string;
    type: string;
    result: string;
    duration: number;
    starPlayer: BattlePlayerInfo;
    teams: BattlePlayerInfo[][];
}
export interface PlayerBattlelogEvent {
    mode: string;
    id: number;
    map: string;
}
export interface Player {
    name: string;
    tag: string;
    club?: PlayerClub;
    trophies: number;
    isQualifiedFromChampionshipChallenge: boolean;
    nameColor: string;
    brawlers: PlayerBrawler[];
    bestRoboRumbleTime: number;
    bestTimeAsBigBrawler: number;
    duoVictories: number;
    soloVictories: number;
    powerPlayPoints: number;
    expPoints: number;
    expLevel: number;
    x3vs3Victories: number;
}
