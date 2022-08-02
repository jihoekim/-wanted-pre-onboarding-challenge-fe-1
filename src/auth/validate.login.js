
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