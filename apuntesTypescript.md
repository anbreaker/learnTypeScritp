## Instalación de TypeScript

- `npm install -g typescript`

### Consultar la versión del compilador de TS:

- `tsc -v`

### Generar tsconfig.json

- `tsc --init`

### Compilar nuestros ficheros .ts

- `tsc index.ts`

### Compilar de manera ‘automática’ nuestros ficheros .ts

- `tsc --watch index.ts` or
<!-- Direcotrio completo el se encarga de buscar los arhcivos -->
- `tsc -w` <!--  En la raiz donde queremos iniciar  -->
<!-- Para compilar proyectos ubicados en direcotrios concretos -->
- `tsc --project 'directorio' -w` <!--  En la raiz donde queremos iniciar  -->

### Resolucion de modulos

- `tsc --moduleResolution node`
  <!-- agregar en tsconfig.json -->
- `"moduleResolution": "node",`
  `"traceResolution": true,`

### Webpack y agrupación de Módulos

- `npm init -y`
- `npm install typescript webpack webpack-cli ts-loader --save-dev`

### Crear archivo de configuracion webpack.conf.js

- `touch webpack.config.js`
- ```
  module.exports = {
      mode: 'production',
      entry: './src/main.ts',
      devtool: 'inline-source-map',
      module: {
          rules: [
              {
                  test: /\.ts$/,
                  use: 'ts-loader',
                  exclude: /node_modules/
              }
          ]
      },
      resolve: {
          extensions: ['.ts', '.js'],
      },
      output: {
          filename: 'bundle.js',
      }
  }
  ```
