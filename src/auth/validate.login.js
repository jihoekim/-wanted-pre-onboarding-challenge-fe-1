
// @ts-check
/// <reference path="../typedefs.js" />

/**
 * 로그인 상태인지 확인
 * 
 */
 export default function validateLogin() {
    return !!localStorage.getItem("token");
}

/**
 * 로그아웃
 */
export function logOut() {
    localStorage.removeItem("token");
}

/**
 * 로그인 토큰 가져오기
 * 
 * @returns {string|null} token
 */
export function getToken() {
    return localStorage.getItem("token");
}