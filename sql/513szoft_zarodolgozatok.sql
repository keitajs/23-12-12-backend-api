-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Dec 12. 12:38
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `513szoft_zarodolgozatok`
--
CREATE DATABASE IF NOT EXISTS `513szoft_zarodolgozatok` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `513szoft_zarodolgozatok`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `zarodolgozatoks`
--

CREATE TABLE `zarodolgozatoks` (
  `id` int(11) NOT NULL,
  `nev` varchar(128) NOT NULL,
  `zarodolgozatcim` varchar(128) NOT NULL,
  `rovidleiras` varchar(256) NOT NULL,
  `leadasidatum` datetime NOT NULL,
  `konzulensnev` varchar(128) NOT NULL,
  `ertekeles` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `zarodolgozatoks`
--
ALTER TABLE `zarodolgozatoks`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `zarodolgozatoks`
--
ALTER TABLE `zarodolgozatoks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
