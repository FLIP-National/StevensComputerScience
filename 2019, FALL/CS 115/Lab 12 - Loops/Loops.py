#****
# Name       : Cindy Zhang
# Pledge     : I pledge my honor that I have abided by the Stevens Honor System.
# Motivation : You. uwu <3
#****
from cs5png import PNGImage

def mult(c,n):
    '''Given numbers c & n, return c*n, using only addition and lööps'''
    a=0
    for n in range(n):
        a+=c
    return a
    pass

def update(c,n):
    '''Given numbers c & n,
    return z where z(0, c) = z and z(n, c) = z(n-1, c)**2 + c,
    absolutely no recursion'''
    z=0
    for n in range(n):
        z=z**2 + c
    return z
    pass

def inMSet(c,n):
    '''Given a complex c and a number n, return if the magnitude of z
    never goes above 2 in the process of doing update(...). Don't(!)
    call update'''
    z=0
    for n in range(n):
        z=z**2 + c
        if abs(z)>2:
            return False
    return True
    pass

def scale(pix, pixelMax, floatMin, floatMax):
    '''Given a pixel value, the max pixel value,
    return where that pixel lies on [floatMin, floatMax] where
    pix=0 -> floatMin and pix=pixelMax -> floatMax'''
    changeOfFloat = floatMax - floatMin
    ratio = changeOfFloat/pixelMax
    return (pix * ratio)+floatMin
    pass

def mset(n):
    '''Creates a 300x200 image of the Mandelbrot set, where
    the image is of the complex plane with x real [-2, 1] and
    y imaginary, [-i, i]'''
    width = 300
    height = 200
    image = PNGImage(width, height)

    for col in range(width):
        for row in range(height):
             x = scale( col, width, -2, 1)
             y = scale( row, height, -1, 1)
             c = x + y*1j
             if inMSet(c, n):
                 image.plotPoint(col, row)
    image.saveFile()

if __name__ == "__main__":
    iterations = 100 # Change this to play with the picture, once everything's working
    mset(iterations)
