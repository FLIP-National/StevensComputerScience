# **************
# * Name   : Cindy Zhang
# * Pledge : I pledge my honor that I have abided by the Stevens Honor System.
# **************

class Rational:
    def __init__(self, n=0, d=1):
        self.numerator = n
        self.denominator = d
        if not self.validate():
            print("Invalid inputs :(")

    def __repr__ (self):
        return "Rational(" + str(self.numerator) \
                + "," + str(self.denominator) + ")"

    def __str__ (self):
       return str(self.numerator) + "/" + str(self.denominator)

    def validate(self):
        return isinstance(self.numerator, int) \
               and isinstance(self.denominator, int) \
               and 0 != self.denominator

    def isZero(self):
        return 0 == self.numerator

    def simplify(self):
        def GCD(n1,n2):
            '''n1 is the bigger number'''
            if(n1%n2==0):
                return n2
            return GCD(n2, n1%n2)
        GCDa = GCD(self.numerator, self.denominator)
        self.numerator/= GCDa
        self.denominator/= GCDa

    def invert(self):
        d = self.denominator
        self.denominator = self.numerator
        self.numerator = d
    
    def __eq__(self, other):
       return self.numerator * other.denominator \
               == self.denominator * other.numerator

    def __ne__(self, other):
        return self.numerator * other.denominator \
               != self.denominator * other.numerator

    def __lt__(self, other):
        return self.numerator * other.denominator \
               < self.denominator * other.numerator
               
    def __le__(self, other):
        return self.numerator * other.denominator \
               <= self.denominator * other.numerator
               
    def __gt__(self, other):
        return self.numerator * other.denominator \
               > self.denominator * other.numerator
               
    def __ge__(self, other):
        return self.numerator * other.denominator \
               >= self.denominator * other.numerator
               
    def __add__(self, other):
        newDenominator = self.denominator*other.denominator
        newNumerator = self.numerator*other.denominator \
                       + self.denominator*other.numerator
        ret = Rational(newNumerator, newDenominator)
        return ret

    def __neg__(self):
        newDenominator = self.denominator
        newNumerator = - self.numerator

        return Rational(newNumerator, newDenominator)

    def __sub__(self, other):
        return self + (-other)

    def __mul__(self, other):
        n = self.numerator * other.numerator
        d = self.denominator * other.denominator
        nd = Rational(n,d)
        nd.simplify()
        return nd

    def __truediv__(self, other):
        n = self.numerator * other.denominator
        d = self.denominator * other.numerator
        nd = Rational(n,d)
        nd.simplify()
        return nd

    def __int__(self):
        return self.numerator//self.denominator

    # Extra Credit: 5 pts
    def continuedFraction(self):
        listerino = []
        n = self.numerator
        d = self.denominator
        first = n//d
        strr = ""
        listerino = ["["] + listerino + [first] + [";"]
        n = n - (first*d)
        newf = Rational(n,d)
        
        while n!=1:
            newf.invert()
            n = newf.numerator - newf.denominator*(newf.numerator//newf.denominator)
            listerino = listerino + [newf.numerator//newf.denominator] + [","]
            newf = Rational(n,newf.denominator)
           
        listerino = listerino + [newf.denominator] + ["]"]

        for i in range(len(listerino)):
            strr = strr + str(listerino[i])

        return strr
            
        


















        














        
