
numeros = input("Ingresa una lista de números enteros separados por comas: ")
lista_numeros = [int(num) for num in numeros.split(",")]

print(f"Longitud de la lista: {len(lista_numeros)}")

print(f"Suma de todos los números: {sum(lista_numeros)}")


numero_buscado = int(input("Ingresa un número para verificar si está en la lista: "))
if numero_buscado in lista_numeros:
    indice = lista_numeros.index(numero_buscado)
    print(f"El número {numero_buscado} está en la lista en el índice {indice}")
else:
    print(f"El número {numero_buscado} no está en la lista.")


lista_numeros.pop()
print(f"Lista actualizada (sin el último elemento): {lista_numeros}")

