#include <iostream>
#include <cmath> 

double cosine(double x) {
    const double pi = M_PI; 
    double rad = x * (pi / 180.0); 
    return cos(rad); 
}

int main() {
    double angle;

    // Prompt the user for an angle in degrees
    std::cout << "Enter an angle in degrees: ";
    std::cin >> angle;

    // Calculate the cosine of the angle
    double result = cosine(angle);

    // Output the result
    std::cout << "The cosine of " << angle << " degrees is: " << result << std::endl;

    return 0;
}
