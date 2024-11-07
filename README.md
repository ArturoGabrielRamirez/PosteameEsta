# Posteame Esta

Estaba yo el otro dia estudiando nuevas tecnologías, cuando me di cuenta del nivel que había alcanzado gracias a los numerosos proyectos personales en los que me había aventurado. Esta realización me llevó a la idea de crear una serie de aplicaciones "simples", por así decirlo.

Continuando con esta iniciativa de programar aplicaciones que representen un desafío para mi razonamiento en cuanto al uso de Next.js y JavaScript, decidí desarrollar una aplicación para crear PostIts. Mi objetivo en esta nueva App es mejorar mis habilidades en el manejo de formularios y la conexión con una base de datos.

Aunque he estado trabajando en el lado del back-end recientemente, siento que todavía hay espacio para mejorar. Espero que esta aplicación me ayude a pulir lo que he estado investigando ademas, me ayude en este camino de aprendizaje y crecimiento personal.

## Plan

Mi plan es hacer commits desde el inicio del desarrollo, algo que hasta ahora he hecho pocas veces a pesar de haber realizado muchos commits y proyectos. Por lo tanto, planeo mejorar la aplicación y la documentación simultáneamente, con la esperanza de mantener un flujo constante de desarrollo. En la aplicación anterior [Age Calculator (Calculadora de Edad)](https://github.com/ArturoGabrielRamirez/AgeCalculator#calculadora-de-edad), me di cuenta de que ya es hora de aplicar este método para mantener una documentación más completa y constante.

## Dependencias e Instalación

Esta aplicación utiliza las siguientes dependencias:

```json
{
  "name": "posteame-esta",
  "version": "0.9.3",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@nextui-org/input": "^2.1.17",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-toast": "^1.1.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "install": "^0.13.0",
    "lucide-react": "^0.303.0",
    "mongodb": "^6.3.0",
    "next": "14.0.1",
    "next-auth": "^4.24.5",
    "next-themes": "^0.2.1",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.48.2",
    "sonner": "^1.3.1",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/react-transition-group": "^4.4.10",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

Para instalar y ejecutar la aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local usando `git clone **<URL del repositorio>**`.
2. Navega hasta el directorio del proyecto usando `cd posteame-esta`.
3. Instala las dependencias necesarias usando `npm install`.
4. Inicia el servidor de desarrollo usando `npm run dev`.

Ahora deberías poder acceder a la aplicación en `http://localhost:3000`
