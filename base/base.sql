-- 1. Création de la table CATEGORY (Secteur d'activité)
CREATE TABLE CATEGORY (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- 2. Création de la table GENDER (Genre)
CREATE TABLE GENDER (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL UNIQUE
);

-- 3. Création de la table SOCIAL_PROFIL (Catégorie sociale)
CREATE TABLE SOCIAL_PROFIL (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL UNIQUE
);

-- 4. Création de la table COMPANY (Entreprise ou Client)
CREATE TABLE COMPANY (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    number VARCHAR(50),
    id_category INT NOT NULL,
    address VARCHAR(255),
    creation_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    FOREIGN KEY (id_category) REFERENCES CATEGORY(id)
);

-- 5. Création de la table CAMPAIGN (Campagne)
CREATE TABLE CAMPAIGN (
    id SERIAL PRIMARY KEY,
    id_company INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL CHECK (status IN ('Draft', 'Active', 'Ended', 'Paused')),
    start_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    end_date TIMESTAMP WITHOUT TIME ZONE,
    FOREIGN KEY (id_company) REFERENCES COMPANY(id)
);

-- 6. Création de la table CONSUMER (Utilisateur)
CREATE TABLE CONSUMER (
    id SERIAL PRIMARY KEY,
    forname VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    number VARCHAR(50),
    age SMALLINT,
    id_social_profil INT,
    id_gender INT,
    city VARCHAR(100),
    FOREIGN KEY (id_social_profil) REFERENCES SOCIAL_PROFIL(id),
    FOREIGN KEY (id_gender) REFERENCES GENDER(id)
);

-- 7. Création de la table OFFER (Offre Publicitaire)
CREATE TABLE OFFER (
    id SERIAL PRIMARY KEY,
    id_campaign INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_url VARCHAR(255),
    cta_text VARCHAR(100),
    cta_link VARCHAR(255),
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    FOREIGN KEY (id_campaign) REFERENCES CAMPAIGN(id)
);

-- 8. Création de la table TARGET_CRITERIA (Critères de ciblage)
CREATE TABLE TARGET_CRITERIA (
    id SERIAL PRIMARY KEY,
    id_offer INT NOT NULL,
    id_gender INT,
    id_social_profil INT,
    min_age SMALLINT,
    max_age SMALLINT,
    city VARCHAR(100),
    FOREIGN KEY (id_offer) REFERENCES OFFER(id),
    FOREIGN KEY (id_gender) REFERENCES GENDER(id),
    FOREIGN KEY (id_social_profil) REFERENCES SOCIAL_PROFIL(id)
);

-- 9. Création de la table PROMO_CODE (Code Promo)
CREATE TABLE PROMO_CODE (
    id SERIAL PRIMARY KEY,
    id_offer INT NOT NULL,
    id_consumer INT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    expires_at TIMESTAMP WITHOUT TIME ZONE,
    is_used BOOLEAN DEFAULT FALSE,
    used_at TIMESTAMP WITHOUT TIME ZONE,
    FOREIGN KEY (id_offer) REFERENCES OFFER(id),
    FOREIGN KEY (id_consumer) REFERENCES CONSUMER(id)
);

-- 10. Création de la table PURCHASE (Achat)
CREATE TABLE PURCHASE (
    id SERIAL PRIMARY KEY,
    id_offer INT NOT NULL,
    id_consumer INT NOT NULL,
    id_promo_code INT,
    amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    payment_status VARCHAR(50) NOT NULL CHECK (payment_status IN ('Completed', 'Pending', 'Failed', 'Refunded')),
    company_confirms BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_offer) REFERENCES OFFER(id),
    FOREIGN KEY (id_consumer) REFERENCES CONSUMER(id),
    FOREIGN KEY (id_promo_code) REFERENCES PROMO_CODE(id)
);