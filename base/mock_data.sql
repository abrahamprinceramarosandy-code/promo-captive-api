-- Données mocks pour Category
INSERT INTO CATEGORY (name) VALUES
('Mode & Habillement'),
('Restauration & Boissons'),
('Beaute & Soins Personnels'),
('Hebergement & Hotellerie'),
('Sport & Loisirs'),
('Technologie & IT'),
('Education & Formation'),
('Sante & Medical'),
('Services Financiers & Assurances'),
('Batiment & Construction'),
('Art & Culture'),
('Evenementiel & Divertissement');

-- Données mocks pour GENDER
INSERT INTO GENDER (type) VALUES 
('Homme'),
('Femme'),
('Unisexe');

-- Données mocks pour GENDER
INSERT INTO SOCIAL_PROFIL (type) VALUES 
('Etudiant'),
('Entrepreneur'),
('Professeur'),
('Journaliste');

-- Données mock pour COMPANY 
INSERT INTO COMPANY (name, email, number, id_category, address, creation_date) VALUES
('Boutique Chic', 'contact@boutiquechic.com', '01 23 45 67 89', 1, '12 Rue de la Mode, 75001 Paris', '2025-05-15 10:30:00'),
('Le Bon Burger', 'reservation@bonburger.fr', '01 98 76 54 32', 2, '25 Avenue de la Faim, 69002 Lyon', '2025-08-20 18:00:00'),
('Tech Solutions Pro', 'info@techpro.net', '04 11 22 33 44', 6, '8 Allée des Bits, 31000 Toulouse', '2015-01-01 09:00:00');

-- Données mock pour CONSUMER
INSERT INTO CONSUMER (forname, email, number, age, id_social_profil, id_gender, city) VALUES
('Antoine', 'antoine.d@mail.com', '06 10 20 30 40', 22, 1, 1, 'Paris'),
('Léa', 'lea.m@email.fr', '07 50 60 70 80', 35, 2, 2, 'Lyon'),
('Sophie', 'sophie.t@pro.net', '06 33 44 55 66', 48, 3, 2, 'Marseille'),
('Jean', 'jean.jy@pro.net', '07 33 44 55 66', 39, 3, 1, 'Marseille');

-- Données Mock pour CAMPAIGN
INSERT INTO CAMPAIGN (id_company, title, description, status, start_date, end_date) VALUES
(1, 'Collection Ete 2025', 'Lancement de la nouvelle collection de vetements legers, ciblant les jeunes adultes.', 'Active', '2025-06-01 09:00:00', '2025-08-31 23:59:59'),
(2, 'Happy Hour Nocturne', 'Promotion sur les burgers et boissons apres 20h pour dynamiser les soirees.', 'Active', '2025-07-15 20:00:00', NULL),
(3, 'Migration Cloud Gratuite', 'Offre limitee pour les nouvelles entreprises passant au cloud avec notre solution.', 'Paused', '2025-05-10 00:00:00', '2025-10-31 00:00:00');

-- Données Mock pour OFFER
INSERT INTO OFFER (id_campaign, title, description, file_url, cta_text, cta_link, created_at) VALUES
(1, '20% de Reduction Etudiants', 'Obtenez 20% de reduction sur tout achat avec votre statut etudiant.', 'http://example.com/file/boutique_20.pdf', 'Obtenir mon Code', 'http://boutiquechic.com/promo', '2025-05-28 14:00:00'),
(2, 'Burger achete, boisson offerte', 'Pour tout achat d un menu XL, la boisson est gratuite.', 'http://example.com/file/burger_promo.png', 'Je commande', 'http://bonburger.fr/commander', '2025-07-10 10:00:00'),
(3, 'Audit de Securite Offert', 'Un audit de securite complet sans engagement avant migration.', NULL, 'Demander un Audit', 'http://techpro.net/audit', '2025-05-01 12:00:00');

-- Données Mock pour TARGET_CRITERIA
INSERT INTO TARGET_CRITERIA (id_offer, id_gender, id_social_profil, min_age, max_age, city) VALUES
(1, NULL, 1, 18, 25, NULL), 
(2, 1, 2, 20, 38, 'Lyon'),
(3, 1, 3, 30, 50, 'Toulouse');

-- Données Mock pour PROMO CODE
INSERT INTO PROMO_CODE (id_offer, id_consumer, created_at, expires_at, is_used, used_at) VALUES
(1, 1, '2025-06-15 11:00:00', '2025-07-15 11:00:00', TRUE, '2025-06-18 15:30:00'),
(2, 2, '2025-07-16 10:00:00', NULL, FALSE, NULL),
(3, 3, '2025-05-05 14:00:00', '2025-06-05 14:00:00', FALSE, NULL);

-- Données Mock pour Purchase
INSERT INTO PURCHASE (id_offer, id_consumer, id_promo_code, amount, created_at, payment_status, company_confirms) VALUES
(1, 1, 1, 85.50, '2025-06-18 15:35:00', 'Completed', TRUE),
(2, 2, NULL, 30.00, '2025-07-20 19:45:00', 'Pending', FALSE),
(2, 3, 2, 45.99, '2025-07-21 12:00:00', 'Failed', FALSE);