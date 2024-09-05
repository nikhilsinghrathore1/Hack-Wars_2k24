#include <cmath> // For the cos function and M_PI

double cosine(double x) {
    const double pi = M_PI; // More accurate representation of pi
    double rad = x * (pi / 180.0); // Use 180.0 to ensure floating-point division
    return cos(rad);
}


int main 