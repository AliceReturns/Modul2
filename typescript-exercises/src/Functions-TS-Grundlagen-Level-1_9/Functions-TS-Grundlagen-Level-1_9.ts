console.clear();

function aboutMe(
  vorname: string,
  nachname: string,
  geburtsort: string,
  alter: string,
  wohnort: string
) {
  const personalInfo = `Mein Name ist ${vorname} ${nachname}. Ich wurde in ${geburtsort} geboren. Ich lerne bei superCode. Ich bin ${alter} und wohne zur Zeit in ${wohnort}.`;
  console.log(personalInfo);
}

aboutMe("Victoria", "Glass", "Atlanta, GA USA", "31", "Düsseldorf");
