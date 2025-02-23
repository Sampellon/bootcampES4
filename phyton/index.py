

def mayor_valor():
    valor1 = float(input("Ingrese el primer valor: "))
    valor2 = float(input("Ingrese el segundo valor: "))
    
    if valor1 > valor2:
        print(f"El mayor es: {valor1}")
    elif valor2 > valor1:
        print(f"El mayor es: {valor2}")
    else:
        print("Ambos valores son iguales.")
console 
mayor_valor()



def suma_diez():
    suma = sum(range(1, 11))
    print(f"La suma de los números del 1 al 10 es: {suma}")

suma_diez()
