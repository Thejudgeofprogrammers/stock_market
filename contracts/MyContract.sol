// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint public storedData; // Переменная для хранения числа

    // Функция для записи числа
    function set(uint x) public {
        storedData = x;
    }

    // Функция для чтения числа
    function get() public view returns (uint) {
        return storedData;
    }
}