import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Foreing.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Foreign = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Skeleton>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h1 style={styles.title}>
          Enterate Como Puedes Pagar tu Mensualidad Si Te Encuentras En El
          Extranjero
        </h1>
        <p style={styles.paragraph}>
          Sobre las personas residentes en el extranjero que perciben ingresos
          por la venta de bienes inmuebles, se considera que los ingresos se
          obtienen en México cuando los bienes objeto de la venta se encuentren
          en territorio nacional.
        </p>
        <h2 style={styles.title}>Tasa de Impuesto</h2>
        <p style={styles.paragraph}>
          El impuesto se debe calcular aplicando la tasa de 25% sobre la
          cantidad total, sin deducción alguna.
        </p>
        <h2 style={styles.title}>Forma de pago</h2>
        <p style={styles.paragraph}>
          El importe del impuesto lo debe retener la persona que adquiere el
          bien siempre que sea residente en el país o residente en el extranjero
          con establecimiento permanente en México; de lo contrario, el
          contribuyente que percibe los ingresos debe hacer el pago al Servicio
          de Administración Tributaria, dentro de los 15 días siguientes a la
          obtención del ingreso.
        </p>
        <h2 style={styles.title}>Pago por medio de representante en México</h2>
        <p style={styles.paragraph}>
          Los residentes en el extranjero que obtienen este tipo de ingresos y
          tienen un representante en México, siempre que la venta se realice
          mediante escritura pública (ante fedatario público), pueden pagar el
          impuesto aplicando sobre la ganancia obtenida la tasa de 35%.
        </p>
        <p style={styles.paragraph}>
          La ganancia se determina restando al total del ingreso por la venta
          las deducciones siguientes:
        </p>
        <ol style={styles.paragraph}>
          <li>
            El costo comprobado de adquisición del inmueble, actualizado
            conforme a lo previsto por el artículo 124 de la Ley del I​mpuesto
            sobre la Renta.
          </li>
          <li>
            El importe de las inversiones en construcciones, mejoras y
            ampliaciones, actualizado conforme a lo previsto por el artículo 124
            de la Ley del Impuesto sobre la Renta.
          </li>
          <li>
            Gastos notariales, impuestos y derechos por escrituras de
            adquisición y venta.
          </li>
          <li>Pagos por avalúo</li>
          <li>
            Comisiones y mediaciones pagadas por el vendedor con motivo de la
            venta.
          </li>
        </ol>
        <p style={styles.paragraph}>
          Cuando la enajenación se consigne en escritura pública, el
          representante dará a conocer a los fedatarios estas deducciones. En
          este caso, los notarios, corredores y demás fedatarios efectúan el
          cálculo del impuesto bajo su responsabilidad, lo hacen constar en la
          escritura y lo enteran al Servicio de Administración Tributaria,
          dentro de los 15 días siguientes a la fecha en que se firma la
          escritura. El representante debe ser residente en México, o residente
          en el extranjero con establecimiento permanente en México, y debe
          conservar, a disposición de las autoridades fiscales, los documentos
          relacionados con el pago del impuesto por cuenta del contribuyente,
          por un plazo de cinco años a partir del día en que se presentó la
          declaración.
        </p>
      </Container>
    </Skeleton>
  );
};

export default Foreign;
