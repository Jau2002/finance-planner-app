# finance-planner-app

## ¿Que es un sistema numerico?

un sistema numeriacion es n cojuntos de simbolos y reglas de generación que permite construir todos los numeros validos

```
N = { S, R }
```

### contexto 

#### { 0, 1 }

elemetos que se utilizan en este mundo

### operaciones 

#### { suma; resta; multiplicación; división }

que reglas reglas puedo utilizar

### transformación 
#### las conversiones son Bin a Dec, Dec a Bin;

## sistema Binario

Es un sisstema de numericion que utiliza 2 simoblos 0 (cero) y 1 (uno)
denominados digitos binarios

### Suma

```agsl
    A   |   B   |   R
    0   |   0   |   0
    1   |   0   |   1
    0   |   1   |   1
    1   |   1   |   1
```

Es la representación digital, es usado ara la representación de textos, datos, y programas ejecutables en dispositivos
operiativos

```
     1 0 0 1
 + 1 0 0 1 1
--------------
   1 1 1 0 0
   
   Dec = 28
```

## Resta

```agsl
    A   |   B   |   R
    0   |   0   |   0
    1   |   0   |   Presta
    1   |   0   |   1
    1   |   1   |   0
```

```
     0 1 1 1
     1 0 0 1
 - 1 0 0 1 1
--------------
   1 1 1 0 0
   
   Dec = 28
```

## Multiplicación

```agsl
    A   |   B   |   R
    0   |   0   |   0
    1   |   0   |   0
    1   |   0   |   0
    1   |   1   |   1
```

```
       1 1 0 0 1
      *  1 0 1 1
    --------------
       0 1 0 0 1
  +  0 1 0 0 1
   0 0 0 0 0
 0 1 0 0 1
------------------
 1 0 0 0 1 0 0 1 1 
   
   Dec = 28
```

## División

```
   1 1 0 1 1 1 | 1 0 1
   1 0 1       ------------
  -------        1 0 1 1
   0 0 1 1 1
    -  1 0 1
  ------------
       0 1 0 1
      -  1 0 1
       ---------
         0 0 0
   
   Dec = 28
```

## Conversiones

### Decimal a binario

Tambien se puede hacer por divisiones 2 y el resto es el decimal, en bucle hasta que sea 1

```agsl
    #   |  64   |  32   |   16  |   8   |   4   |   2   |   1
   111  |   1   |   1   |   0   |   1   |   1   |   1   |   1
    1   |   0   |   0
    1   |   0   |   0
    1   |   1   |   1
```

### 