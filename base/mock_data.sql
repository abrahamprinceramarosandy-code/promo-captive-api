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
('Sophie', 'sophie.t@pro.net', '06 33 44 55 66', 48, 3, 2, 'Marseille');