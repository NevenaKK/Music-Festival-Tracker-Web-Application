

INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (1,'miroslav@maildrop.cc','miroslav','$2y$12$NH2KM2BJaBl.ik90Z1YqAOjoPgSd0ns/bF.7WedMxZ54OhWQNNnh6','Miroslav','Simic','ADMIN');
INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (2,'tamara@maildrop.cc','tamara','$2y$12$DRhCpltZygkA7EZ2WeWIbewWBjLE0KYiUO.tHDUaJNMpsHxXEw9Ky','Tamara','Milosavljevic','KORISNIK');
INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (3,'petar@maildrop.cc','petar','$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC','Petar','Jovic','KORISNIK');

              
INSERT INTO `test`.`festival` (`id`, `naziv`) VALUES ('1', 'Exit');
INSERT INTO `test`.`festival` (`id`, `naziv`) VALUES ('2', 'ArtMania');
INSERT INTO `test`.`festival` (`id`, `naziv`) VALUES ('3', 'LoveFest');


INSERT INTO `test`.`izvodjac` (`id`, `broj_clanova`, `drzava_porekla`, `ime`, `zanr`) VALUES ('1', '5', 'Velika Britanija', 'Tessetract', 'Prog-Metal');
INSERT INTO `test`.`izvodjac` (`id`, `broj_clanova`, `drzava_porekla`, `ime`, `zanr`) VALUES ('2', '2', 'Sjedinjene Americke Drzave', 'Sungazer', 'Jazz Fusion');
INSERT INTO `test`.`izvodjac` (`id`, `broj_clanova`, `drzava_porekla`, `ime`, `zanr`) VALUES ('3', '1', 'Srbija', 'Bora Dugic', 'Tradicionalna srpska muzika');
INSERT INTO `test`.`izvodjac` (`id`, `broj_clanova`, `drzava_porekla`, `ime`, `zanr`) VALUES ('4', '7', 'Sjedinjene Americke Drzave', 'Darkmoon', 'Regge');
INSERT INTO `test`.`izvodjac` (`id`, `broj_clanova`, `drzava_porekla`, `ime`, `zanr`) VALUES ('5', '3', 'Srbija', 'Mikri', 'Tvrdi rep');

INSERT INTO `test`.`nastup` (`id`, `festival_id`, `izvodjac_id`) VALUES ('1', '1', '4');
INSERT INTO `test`.`nastup` (`id`, `festival_id`, `izvodjac_id`) VALUES ('2', '2', '2');
INSERT INTO `test`.`nastup` (`id`, `festival_id`, `izvodjac_id`) VALUES ('3', '3', '1');
INSERT INTO `test`.`nastup` (`id`, `festival_id`, `izvodjac_id`) VALUES ('4', '3', '5');
