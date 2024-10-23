### Componentes

¿Qué es un componente?

Un componente en React es una pieza reutilizable de la interfaz de usuario. Se puede pensar en los componentes como bloques de construcción que juntos forman la aplicación completa. Cada componente puede tener su propia lógica y estilo.

Los componentes en React son funciones o clases que retornan elementos de JSX (JavaScript XML), una extensión de JavaScript que permite escribir HTML dentro de JavaScript.

- Componentes funcionales:

```javascript
const Saludo = ({ nombre }) => <h1>Hola, {nombre}!</h1>;
```

- Componentes de clase:

```javascript
class Saludo extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}
```

### ¿Para qué sirven los Componentes?

- Reutilización de código: Puedes crear un componente una vez y usarlo en múltiples partes de la aplicación.

- Mantenimiento: Separar la aplicación en componentes más pequeños y especializados facilita su mantenimiento y escalabilidad.

- Modularidad: Ayuda a dividir la UI en piezas más pequeñas y manejables.

### Buenas prácticas en Componentes

- Dividir en componentes pequeños: Es mejor tener muchos componentes pequeños que un componente gigante que haga muchas cosas.

- Nombres claros: Los nombres de los componentes deben ser descriptivos.

- Mantener el estado en el componente adecuado: Solo coloca el estado donde realmente se necesita.

- Evitar lógica pesada dentro de la UI: Mueve la lógica compleja fuera de los componentes de presentación (como funciones de utilidades).

- Componentes puros: Siempre que sea posible, crea componentes "puros" que no manejen estado, sino que solo reciban props y devuelvan JSX.

### Reutilización de componentes

Una de las ventajas de React es la reutilización de componentes. Puedes crear componentes genéricos y reutilizarlos en diferentes partes de la aplicación.

Ejemplo de componente genérico:

```javascript
const Boton = ({ texto, onClick }) => (
  <button onClick={onClick}>{texto}</button>
);
```

### Props

Las props (propiedades) son la forma de pasar datos a los componentes en React. Las props son inmutables y se pasan de arriba hacia abajo en la jerarquía de componentes.

Ejemplo de uso de props:

```javascript
const Saludo = ({ nombre }) => <h1>Hola, {nombre}!</h1>;
const App = () => <Saludo nombre="Humberto" />;
```

### Prop Children + Fragment

La prop especial `children` permite pasar elementos JSX anidados a un componente. Puedes usar `children` para envolver contenido dentro de un componente.

Ejemplo de uso de `children`:

```javascript
const Card = ({ children }) => <div className="card">{children}</div>;
const App = () => (
  <Card>
    <h2>Título</h2>
    <p>Contenido de la tarjeta</p>
  </Card>
);
```

Los fragmentos (`<></>`) son una forma de envolver múltiples elementos JSX sin agregar nodos adicionales al DOM.

```javascript
const App = () => (
  <>
    <h1>Título 1</h1>
    <h2>Título 2</h2>
  </>
);
```

### Exportar e Importar Componentes

Exportación por defecto para componentes: Es común exportar los componentes React por defecto, ya que suelen ser el único elemento exportado por archivo y es más fácil de importar.

Exportación sin default para utilidades y constantes: Para funciones de utilidad, hooks personalizados o constantes, se recomienda usar export sin default, ya que permite agrupar varias exportaciones en un solo archivo y la importación es más clara.

Ejemplo de exportación por defecto:

```javascript
const Saludo = ({ nombre }) => <h1>Hola, {nombre}!</h1>;
export default Saludo;
```

Ejemplo de exportación sin default:

```javascript
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
```
