export interface Movie {

    title: string;
    director: string;
    year: number;
    id: number;
    cast: string;
    runningTimes: RunningTime;
}

export interface RunningTime {
    mon: string[];
    tue: string[];
    wed: string[];
    thu: string[];
    fri: string[];
    sat: string[];
    sun: string[];


}
