INSERT INTO user (email, password, role, name) VALUES
("august@lautt.com", "august", "user", "August Lautt"),
("catherine@filus.com", "catherine", "user", "Catherine Filus"),
("mengying@fan.com", "mengying", "user", "Mengying Fan");

INSERT INTO user (email, password, role) VALUES
("admin@company.com", "admin", "admin");

INSERT INTO award_type (name) VALUES
("Employee of the Month"),
("Employee of the Week");

#QUERY FOR INSERTING NEW AWARD
INSERT INTO award (awardee_id, awarder_id, type_id, awarded) VALUES
((SELECT id FROM user WHERE email="august@lautt.com"), (SELECT id FROM user WHERE email="catherine@filus.com"), (SELECT id FROM award_type WHERE name="Employee of the Month"), "2017-10-15 11:30:45"), 
((SELECT id FROM user WHERE email="august@lautt.com"), (SELECT id FROM user WHERE email="catherine@filus.com"), (SELECT id FROM award_type WHERE name="Employee of the Week"), "2017-10-16 10:45:30"), 
((SELECT id FROM user WHERE email="catherine@filus.com"), (SELECT id FROM user WHERE email="mengying@fan.com"), (SELECT id FROM award_type WHERE name="Employee of the Week"), "2017-10-15 11:30:45"), 
((SELECT id FROM user WHERE email="mengying@fan.com"), (SELECT id FROM user WHERE email="catherine@filus.com"), (SELECT id FROM award_type WHERE name="Employee of the Week"), "2017-10-15 11:30:45");

#QUERY FOR UPDATING USER NAME
UPDATE user
SET name = "August"
WHERE email="august@lautt.com";

#QUERY FOR DISPLAYING AWARD TYPES
SELECT id, name
FROM award_type

#QUERY FOR DISPLAYING AWARDS ASSOCIATED WITH USER
SELECT award.id, user.name AS awardee, award.awarded 
FROM award
JOIN user ON award.awardee_id = user.id
WHERE awarder_id = (SELECT id FROM user WHERE email="catherine@filus.com");

#QUERY FOR DELETING SELECTED AWARD
DELETE FROM award 
WHERE id = 2

#QUERY FOR AUTHORIZATION
SELECT id, email
FROM user
WHERE email="august@lautt.com" AND password="august" AND role = "user";