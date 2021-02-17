import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "@nativescript/core/application-settings";

export function setCurrentWeather(apiResult) {
    setString("currentWeather", apiResult);
}

export function getCurrentWeather() {
    return getString("currentWeather");
}
