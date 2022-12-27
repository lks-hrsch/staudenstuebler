<template>
    <AccordionCard title="Preise">
        <div class="self-center">
            Die Preise ersehen Sie in der Pflanzenliste letzte Spalte "Preisgruppe" und unten stehender Preistabelle.
            Die Preistabelle A beinhaltet die Preise für den Pflanzenversand. Die Preistabelle B für den Direkteinkauf
            in unserer Gärtnerei. Die Preise enthalten die gesetzliche Mehrwertsteuer (7%) und im Preis für
            Pflanzenversand zusätzlich die Bearbeitung und das Verpackungsmaterial. Die Versandkosten entnehmen Sie
            bitte der AGB.
        </div>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Preisgruppe</th>
                    <th>A</th>
                    <th>B</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2,50€</td>
                    <td>2,00€</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3,10€</td>
                    <td>2,60€</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3,60€</td>
                    <td>3,10€</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>4,00€</td>
                    <td>3,50€</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>4,60€</td>
                    <td>4,10€</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>5,60€</td>
                    <td>5,10€</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>6,50€</td>
                    <td>6,00€</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>7,50€</td>
                    <td>7,00€</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>8,50€</td>
                    <td>8,00€</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>9,50€</td>
                    <td>9,00€</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>10,50€</td>
                    <td>10,00€</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>11,50€</td>
                    <td>11,00€</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>12,50€</td>
                    <td>12,00€</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>13,50€</td>
                    <td>13,00€</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>14,50€</td>
                    <td>14,00€</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>15,50€</td>
                    <td>15,00€</td>
                </tr>
            </tbody>
        </table>
    </AccordionCard>

    <AccordionCard title="Erklärungen der Abkürzungen und Zeichen in unseren Pflanzenlisten und auf unseren Etiketten">
        <div class="text-xl self-center">
            Etikett:
        </div>
        <div class="text-xl self-center">
            Lichtansprüche:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="so" value="Sonne" />
            <AbbValueListing abb="hs" value="Halbschatten" />
            <AbbValueListing abb="sh" value="Schatten" />
        </div>
        <div class="text-xl self-center">
            Bodenansprüche:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="ex" value="extrem trocken" />
            <AbbValueListing abb="tr" value="trocken" />
            <AbbValueListing abb="no" value="normal" />
            <AbbValueListing abb="fr" value="frisch" />
            <AbbValueListing abb="na" value="naß" />
        </div>
        <div class="text-xl self-center">
            Pflanzenansprüche:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="s" value="saurer Boden erforderlich" />
            <AbbValueListing abb="k" value="Kalk im Boden erforderlich" />
            <AbbValueListing abb="ns" value="Nässeschutz im Winter" />
            <AbbValueListing abb="ks" value="Kälteschutz im Winter" />
            <AbbValueListing abb="ss" value="Sonnenschutz im Winter" />
        </div>
        <div class="text-xl self-center">
            Eigenschaften:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="BG" value="Blütengehölz" />
            <AbbValueListing abb="BI" value="Bienennahrung" />
            <AbbValueListing abb="BU" value="Buntlaubig" />
            <AbbValueListing abb="D" value="Duftpflanze" />
            <AbbValueListing abb="FR" value="Fruchtschmuck" />
            <AbbValueListing abb="HF" value="Herbstfärbung" />
            <AbbValueListing abb="IH" value="Industriehart" />
            <AbbValueListing abb="IM" value="Immergrün" />
            <AbbValueListing abb="KL" value="klettert am Spalier" />
            <AbbValueListing abb="KK" value="klettert ohne Spalier" />
            <AbbValueListing abb="LW" value="wächst besonders langsam" />
            <AbbValueListing abb="WI" value="Wintergrün" />
        </div>
        <div class="text-xl self-center">
            In der Spalte Verwendung teilweise Angegebene Zahlen von 1-8 geben Die Frosthärte an:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="1-6b" value="absolut hart" />
            <AbbValueListing abb="7a" value="in der Regel hart" />
            <AbbValueListing abb="7b" value="in geschützter Lage hart" />
            <AbbValueListing abb="8a" value="Winterschutz angebracht" />
            <AbbValueListing abb="STA" value="vor Sortennamen ist eine bei uns im Betrieb gezüchtete Sorte" />
        </div>
        <div class="text-xl self-center">
            Verwendung:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="AL" value="Allee-, Straßenbaum" />
            <AbbValueListing abb="BD" value="Bodendecker" />
            <AbbValueListing abb="DA" value="Dachbegrünung" />
            <AbbValueListing abb="DG" value="Dauergrabbepflanzung" />
            <AbbValueListing abb="EI" value="Einfassungspflanze" />
            <AbbValueListing abb="FL" value="Einheimisches Flurgehölz/ Wildstaude" />
            <AbbValueListing abb="GL" value="Garten und Landschaftsbau, pflegeleicht" />
            <AbbValueListing abb="HE" value="Heckenpflanze" />
            <AbbValueListing abb="KU" value="Schalen und Trogbepflanzung" />
            <AbbValueListing abb="PI" value="Pioniergehölz/-pflanze" />
            <AbbValueListing abb="SB" value="Schnittblume" />
            <AbbValueListing abb="SL" value="Solitär, Einzelstellung" />
            <AbbValueListing abb="TB" value="Trockenblume" />
            <AbbValueListing abb="WK" value="Pflanzenkläranlage" />
        </div>
        <div class="text-xl self-center">
            Lebensbereiche:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="G" value="unter Gehölzen" />
            <AbbValueListing abb="GR" value="am Gehölzrand" />
            <AbbValueListing abb="FB" value="Freiflächen, Wildstauden" />
            <AbbValueListing abb="SH" value="Steppenheide" />
            <AbbValueListing abb="H" value="Heide" />
            <AbbValueListing abb="ST" value="Steinanlagen" />
            <AbbValueListing abb="SF" value="Steinfugen" />
            <AbbValueListing abb="MK" value="Mauerkrone" />
            <AbbValueListing abb="A" value="Alpinum" />
            <AbbValueListing abb="NA" value="Neuseelandalpinum" />
            <AbbValueListing abb="B" value="Beet und Prachtstauden" />
            <AbbValueListing abb="WR1" value="Wasserrand trocken" />
            <AbbValueListing abb="WR2" value="Wasserrand feucht" />
            <AbbValueListing abb="W1" value="Flachwasser bis 10cm" />
            <AbbValueListing abb="W2" value="Wassertiefe bis 50cm" />
            <AbbValueListing abb="W3" value="Wassertiefe über 50cm" />
            <AbbValueListing abb="WT" value="Wassertiefe in cm bei Seerosen" />
        </div>
        <div class="text-xl self-center">
            Lebensbereiche der Arktischen und Alpinen Pflanzen:
        </div>
        <div class="flex flex-col self-center">
            <AbbValueListing abb="A-1" value="Bergwald" />
            <AbbValueListing abb="A-2" value="Hochstaude" />
            <AbbValueListing abb="A-3" value="Zwergstrauchheide" />
            <AbbValueListing abb="A-4" value="Matte" />
            <AbbValueListing abb="A-5" value="Schutthalde" />
            <AbbValueListing abb="A-6" value="Felsspalte" />
            <AbbValueListing abb="A-7" value="Felsabsatz" />
            <AbbValueListing abb="A-8" value="Schneetälchen" />
        </div>
    </AccordionCard>

    <AccordionCard title="internationale Bewertung von Stauden und Gehölzen (Sichtung)">
        <div class="flex flex-col self-center">
            <AbbValueListing abb="ISU*" value="Internationale Staudenunion Diplom" />
            <AbbValueListing abb="D*" value="Sichtung Deutschland ,gute Sorte" />
            <AbbValueListing abb="D**" value="Sichtung Deutschland, sehr gute Sorte" />
            <AbbValueListing abb="D***" value="Sichtung Deutschland, ausgezeichnete Sorte" />
            <AbbValueListing abb="NL*" value="Sichtung Niederlande, gute Sorte" />
            <AbbValueListing abb="NL**" value="Sichtung Niederlande, sehr gute Sorte" />
            <AbbValueListing abb="NL***" value="Sichtung Niederlande, ausgezeichnete Sorte" />
            <AbbValueListing abb="CH*" value="Sichtung Schweiz, gute Sorte" />
            <AbbValueListing abb="CH**" value="Sichtung Schweiz, sehr gute Sorte" />
            <AbbValueListing abb="CH***" value="Sichtung Schweiz, ausgezeichnete Sorte" />
            <AbbValueListing abb="US**" value="Sichtung USA, gute Sorte" />
            <AbbValueListing abb="US***" value="Sichtung USA, gesichtete Spitzensorte" />
            <AbbValueListing abb="NL*99"
                value="In Plantarium Boskop Niederlande ausgezeichnete beste Neuheit des Jahres 1999 usw." />
            <AbbValueListing abb="AGM" value="Award of Garten Merit ,höchste engliche Auszeichnung" />
            <AbbValueListing abb="FCC" value="First Class Certivikat, höchste engliche Auszeichnung bis 1991" />
            <AbbValueListing abb="N02" value="Neuheit des Jahres 2002 usw." />
        </div>
    </AccordionCard>

    <AccordionCard title="Haftungsausschluss">
        <div class="self-center">
            Alle von uns verkauften Pflanzen sind ausschließlich zur Anpflanzung für Zierzwecke bestimmt. Eine darüber
            hinaus gehende Verwendung ist nur im Rahmen des aktuellen Rechts des jeweiligen Landes zulässig. Alle
            Hinweise auf Gebrauch in den Sortenbeschreibungen haben ausschließlich informativen Charakter. Die
            Verwendung erfolgt auf eigene Gefahr.
        </div>
    </AccordionCard>
</template>