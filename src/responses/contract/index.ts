export const title = "CONTRATO DE ARRENDAMIENTO VIVIENDA URBANA";

export const pageOne = (
    currentDay: number,
    currentMonth: string,
    currentYear: number,
    manage: string,
    manageContry: string,
    idManage: string,
    idCountryManage: string,
    client: string,
    countryClient: string,
    idClient: string,
    idCountryClient: string,
) => {
    const text: string = `
        En la ciudad de Colombia a los ${currentDay} del mes de 
        ${currentMonth} de ${currentYear} entre el suscrito: ${manage}
        mayor y vecinos de ${manageContry}, identificado con la cédula de ciudadanía número ${idManage}
        expedida en ${idCountryManage} respectivamente en adelante llamados los
        ARRENDATARIOS, de una parte, y ${client}, mayor y vecino de ${countryClient}, identificado con
        la cédula de ciudadanía número ${idClient} expedida en ${idCountryClient}, en adelante
        denominado el ARRENDADOR, de otra parte, acuerdan celebrar el presente contrato de 
        arrendamiento del inmueble, regido por las siguientes cláusulas:

        PRIMERA. Son obligaciones del arrendador, las siguientes: 1. Entregar al arrendatario en la
        fecha convenida, o en el momento de la celebración del contrato, el inmueble dado en
        arrendamiento en buen estado de servicio, seguridad y sanidad y poner a su disposición
        los servicios, cosas o usos conexos y los adicionales convenidos. 2. Mantener en el inmueble
        los servicios, las cosas y los usos conexos y adicionales en buen estado de servir para el
        fin convenido en el contrato. 3. (Cuando el contrato de arrendamiento de vivienda urbana
        conste por escrito) Suministrar tanto al arrendatario como al codeudor, cuando sea el caso,
        copia del mismo con firmas originales, obligación que deberá ser satisfecha en el plazo
        máximo de diez (10) días contados a partir de la fecha de celebración del contrato 4.
        (Cuando se trate de viviendas sometidas a Régimen de Propiedad Horizontal Entregar al
        arrendatario una copia de la parte normativa del mismo. (En caso de vivienda compartida).
        Mantener en adecuadas condiciones de funcionamiento, de seguridad y de sanidad las zonas o
        servicio de uso común y de efectuar por su cuenta las reparaciones y sustituciones necesarias,
        cuando no sean atribuibles a los arrendatarios, y garantizar el mantenimiento del orden
        interno de la vivienda; 5. Las demás obligaciones consagradas para los arrendadores en el
        capítulo II, Título XXVI, Libro 4 del Código Civil . SEGUNDA: Son obligaciones del arrendatario: 1.
        Pagar el precio del arrendamiento dentro del plazo estipulado en el contrato, en el inmueble
        arrendado o en el lugar convenido. 2. Cuidar el inmueble y las cosas recibidas en arrendamiento.
        En caso de daños o deterioros distintos a los derivados del uso normal o de la acción del tiempo
        y que fueren imputables al mal uso del inmueble o a su propia culpa, efectuar oportunamente y por
        su cuenta las reparaciones o sustituciones necesarias. 3. Pagar a tiempo los servicios, cosas o usos
        conexos y adicionales, así como las expensas comunes en los casos en que haya lugar, 
        (de conformidad con lo establecido en el contrato). 4. Cumplir las normas consagradas en los
        reglamentos de propiedad horizontal y las 
    `

    return text;
}