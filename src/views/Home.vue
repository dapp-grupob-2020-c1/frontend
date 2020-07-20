<template>
  <PageContainer>
    <b-jumbotron :header="$t('home.welcome')">
      <p>{{ $t("home.introRolesSuggestion") }}</p>
      <p>{{ $t("home.introLoginSuggestion") }}</p>
    </b-jumbotron>
    <b-container class="my-5">
      <b-row class="justify-content-center">
        <b-col md="10" lg="8">
          <div class="about">
            <h1>{{ $t("app.appName") }}</h1>
            <p>
              La actual situación de aislamiento obligatorio dificulta el acceso
              a los comercios de cercanía y la adquisición de diversos productos
              de consumo frecuente. Adicionalmente, los comercios de cercanía
              suelen ser pequeños y no cuentan con infraestructura para realizar
              envíos o gestionar adecuadamente pedidos en línea. Teniendo en
              cuenta esta razones, se nos encarga la construcción de una
              aplicación que le permita a los pequeños negocios barriales crear
              su perfil y publicar sus productos de modo tal que puedan recibir
              pedidos tanto para ser retirados en el local como para ser
              enviados al domicilio de quien haya comprado.
            </p>
            <b-collapse id="description-collapse">
              <p>
                Cada comercio debe poder crear su perfil indicando su rubro,
                domicilio, días y horarios de atención, medios de pago y
                distancia máxima para realizar un envío.
              </p>
              <p>
                La aplicación debe permitir listar, para un comercio específico,
                los productos a la venta para lo cual se debe poder cargar
                nombre, marca, stock, precio y una imagen. Estos productos
                pueden ser modificados por el ENCARGADO del local o puede
                actualizarse de manera batch por medio de un CSV donde se carga
                &gt;ID, Nombre, Marca, Stock, Precio, Imagen&lt; . Imagen como
                una URL a una imagen pública.
              </p>
              <p>
                Los compradores podrán crearse usuarios y crear listas de
                compras. Las listas incluyen nombre del producto y cantidad a
                comprar. Teniendo en cuenta que el abastecimiento de los
                comercios puede verse impactado en este contexto, la aplicación
                debe permitir que una compra incluya productos adquiridos en
                diferentes comercios.
              </p>
              <p>
                Mientras El COMPRADOR ingresa productos en su lista de compra,
                el sistema irá calculando el monto gastado. El sistema también
                permitirá configurar alertas para notificarle al comprador si ha
                superado cierto umbral de diferencia histórica entre categorías
                de productos. Esta alerta se puede habilitar y deshabilitar. Ej:
                Superó en 10% la categoría de bebidas alcohólicas, Superó en 10%
                golosinas.
              </p>
              <p>
                Las listas de compras pueden ser almacenadas para reiterarlas en
                el futuro. Una vez que el COMPRADOR terminó de comprar, podrá
                solicitar el envío a su domicilio o gestionar un turno para
                retirar en el local. Un local entrega un turno cada 15 minutos.
                Si el COMPRADOR opta por retirar en el local, deberá recibir un
                mail dos horas antes del turno asignado recordándole la hora en
                la que debe pasar a retirar el pedido. En caso que el comprador
                haya optado por el envío a domicilio, será necesario crear una
                dirección de envío, mostrarlo en un mapa de google maps y
                mostrar la distancia a su casa. Si el comprador decide está
                opción, el sistema asignará un día y horario para la entrega y
                notificará al comprador por mail. El pago se hará en su casa
                cuando llegue el envío.
              </p>
              <p>
                A partir de que un usuario se registre, podrá comenzar a definir
                su perfil. El perfil de usuario contendrá sus preferencias de
                compras de categorías (umbrales) y monto de compra (umbral).
                Estas preferencias podrían cambiar o ampliarse más adelante.
              </p>
              <p>
                La aplicación deberá ser completamente responsive ya que si bien
                ahora no vamos a contar con una aplicación mobile, será
                importante que pueda mostrarse correctamente en celulares y
                tablets.
              </p>
              <p>
                Es requisito indispensable proveer la capacidad de acceder a la
                aplicación utilizando una cuenta existente en alguna de las
                herramientas o redes sociales más utilizadas (gmail, facebook,
                twitter, etc). No obstante, se debe proveer una opción de crear
                usuario donde se deba ingresar NombreDeUsuario, email y
                contraseña.
              </p>
              <p>
                El ENCARGADO del local podrá crear ofertas por categorías de
                productos, por producto y por combinación de 2 productos. La
                oferta será un porcentaje de descuento sobre el/los productos
                donde aplicó la oferta. Estas ofertas tendrán una vigencia
                definida entre 2 fechas. El tipo de ofertas podrá cambiar
                dependiendo de la creatividad de cada comercio.
              </p>
              <p>
                Los compradores podrán ver su historial de compras desde su
                perfil de usuario. Además el sistema también ofrecer los
                productos que quizás también le interese a medida que el usuario
                vaya comprando o agregando productos a su lista.
              </p>
            </b-collapse>
            <b-button v-b-toggle.description-collapse variant="text">
              <span class="when-closed">{{ $t("home.seeMore") }}</span>
              <span class="when-open">{{ $t("home.seeLess") }}</span>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </PageContainer>
</template>

<script>
import PageContainer from "../components/PageContainer";
export default {
  components: {
    PageContainer
  }
};
</script>

<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
