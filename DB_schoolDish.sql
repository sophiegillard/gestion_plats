-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql300.byetcluster.com
-- Généré le :  mer. 14 déc. 2022 à 12:26
-- Version du serveur :  10.3.27-MariaDB
-- Version de PHP :  7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `epiz_33197544_gestionplats`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nomCat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `nomCat`) VALUES
(1, 'Sandwich'),
(2, 'Plats chauds'),
(3, 'Plats froids');

-- --------------------------------------------------------

--
-- Structure de la table `fournisseur`
--

CREATE TABLE `fournisseur` (
  `id` int(11) NOT NULL,
  `nomFrn` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fournisseur`
--

INSERT INTO `fournisseur` (`id`, `nomFrn`) VALUES
(1, 'Sysco'),
(2, 'Regalgel'),
(3, 'Azoistribution');

-- --------------------------------------------------------

--
-- Structure de la table `plat`
--

CREATE TABLE `plat` (
  `id` int(11) NOT NULL,
  `libellee` varchar(70) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `fournisseur` int(11) NOT NULL,
  `categorie` int(11) NOT NULL,
  `checked` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `plat`
--

INSERT INTO `plat` (`id`, `libellee`, `prix`, `fournisseur`, `categorie`, `checked`) VALUES
(212, 'Sandwich américain', '2.00', 1, 1, 0),
(213, 'Lasagne', '5.00', 3, 2, 0),
(214, 'Pizza', '4.00', 3, 2, 0),
(215, 'Salade mixte', '4.50', 2, 3, 0),
(216, 'Salade César', '5.50', 1, 3, 0),
(217, 'Salade saumon fumé', '6.60', 1, 3, 0),
(218, 'Wrap', '4.00', 1, 3, 0),
(219, 'Hachis parmentiers', '6.20', 2, 2, 0),
(220, 'Soupe courgette', '1.50', 1, 2, 0),
(224, 'Hachis parmentier', '6.20', 2, 2, 0),
(225, 'Soupe courgette', '1.50', 1, 2, 0),
(226, 'Soupe navet', '1.50', 2, 2, 0),
(227, 'Pizza 4 fromages', '6.00', 3, 2, 0),
(228, 'Pizza 4 saisons', '6.00', 2, 2, 0),
(229, 'Croque Monsieur', '3.00', 1, 2, 0),
(230, 'Croque Hawaï', '3.00', 2, 2, 0),
(231, 'Hachis parmentier', '6.20', 2, 2, 0),
(232, 'Soupe courgette', '1.50', 1, 2, 0),
(233, 'Soupe navet', '1.50', 2, 2, 0),
(236, 'Hachis parmentier', '6.20', 2, 2, 0),
(237, 'Soupe courgette', '1.50', 1, 2, 0),
(238, 'Soupe navet', '1.50', 2, 2, 0),
(239, 'Pizza 4 fromage', '6.00', 2, 2, 0),
(240, 'Pizza 4 saisons', '6.00', 2, 2, 0),
(241, 'Hachis parmentier', '6.20', 2, 2, 0),
(242, 'Soupe courgette', '1.50', 1, 2, 0),
(273, 'purée', '2.00', 2, 2, 0),
(277, 'tomate mozza', '2.00', 1, 1, 0),
(278, 'pates pesto', '2.00', 1, 1, 0),
(286, 'tranches', '2.00', 1, 3, 0),
(299, 'crepes', '100.00', 2, 2, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fournisseur`
--
ALTER TABLE `fournisseur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `plat`
--
ALTER TABLE `plat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fournisseur` (`fournisseur`),
  ADD KEY `categorie` (`categorie`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `plat`
--
ALTER TABLE `plat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=300;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `plat`
--
ALTER TABLE `plat`
  ADD CONSTRAINT `plat_ibfk_1` FOREIGN KEY (`fournisseur`) REFERENCES `fournisseur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `plat_ibfk_2` FOREIGN KEY (`categorie`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
