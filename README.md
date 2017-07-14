# auxdaceco
*Aŭdaceco* estas klono de la usona TV-kvizo Jeopardy, ludebla per retumilo,
planita por uzado dum Esperanto aranĝoj.  
Ĝi estas plur-ludanta kaj postulas ludestron, kiu prezentu la kvizon kaj,
per muzo aŭ klavaro, antaŭenigu la ludon.

## Ekfunkciigado
Funkciigi la ludon vi povos en du paŝoj:
* instalado
* kreado de la dosiero pri la demandoj

Legu ĉi-sube kiel tion fari, kaj post kvin minutoj vi jam estos ludanta.

### Instalado
Elŝutu la projekton per
[tiu ĉi ligilo](https://github.com/etuardu/auxdaceco/archive/master.zip)
kaj elpaku ĝin, aŭ uzu `git clone`.

Tio estas jam ĉio, ĉu por instali la ludon en propran retservilon, ĉu por
ludi el loka dosierujo.

### Kreado de la dosiero pri la demandoj
La demandojn de la kvizo oni skribu en la dosieron `demandoj.js.txt`, en la
ĉefa dosierujo. Tiu ĉi dosiero komence ne ekzistas, do vi devos krei ĝin.

Vi trovos ekzemplan demandaron, kiu nomiĝas `demandoj_ekzemplo.js.txt`.
Renomu tiun ĉi al `demandoj.js.txt` kaj jen ĉio.

Malfermu la dosieron `index.html` per retumilo, kaj la kvizo funkcios kun
la ekzemplaj demandoj.

## Difini la demandojn
Por redakti la demandojn, vi bezonos tekstan redaktilon kiel notepad aŭ
simile. Per ĝi, malfermu la dosieron `demandoj.js.txt` kaj redaktu la
ekzemplajn demandojn.

Devus esti sufiĉe simple kompreni la strukturon de la demandaro, sed kaze de
duboj, jen detala priskribo pri ĝia formato.

### Formato de la demandaro
La tekston de la demandoj estu en la dosiero `demandoj.js.txt` inter la
linio markita `KOMENCO` kaj la linio markita `FINO`.

Unue skribu la nomon de la kategorio kaj poste listigu ĉiun demandon
apartenantan al ĝi, de la malplej valora (200 poentoj) ĝis la plej valora.

Kaj la kategorioj kaj la unuopaj demandoj devos okupi po unu linion
(t.e., ne eblas doni liniajn interrompojn en ĝiaj tekstoj).
 
Inter unu kategorio kaj la sekva, metu unu (aŭ pli) blankan linion.
Ideale, vi listigu entute 6 kategoriojn, havante po 5 demandojn.
Tiu ĉi estas la originala skemo de Jeopardy, sed tio ne estas devige kaj
la ludo mem adaptiĝos ĉiukaze. Gravas nur ke la demandaro de ĉiu
kategorio estu samnombra.

Eblas aldoni komentojn fine de ĉiu demando, post la markilo `##`.
Ili ne estos montritaj dum la kvizo, sed povus esti utilaj por la kvizestro.

Jen ekzemplo de kvizo kun du kategorioj el po tri demandoj:
```
   KATEGORIO UNU
   Ĉu eĥo ŝanĝas ĉiuĵaŭde? ## respondo: ne, ĝi ŝanĝas ĉiusabate
   Kiakolora estis la blanka ĉevalo de Napoleono?
   Kiom estis la sep nanoj?

   KATEGORIO DU
   Kiom estas 2+2?
   Kio okazis kristnaske en jaro nul? ## sugesto: en Betleĥemo
   Ĉu aŭ malĉu?
```

## Nomi la ludantojn
Dum la ludo, vi iam ajn povos alinomi la ludantojn, rekte klakante la
rilatan skribaĵon ("Ludanto 1", "Ludanto 2", "Ludanto 3").
