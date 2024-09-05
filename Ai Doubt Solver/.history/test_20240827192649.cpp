#include <iostream>
#include <cmath> // For the cos function and M_PI

// Function to calculate the cosine of an angle in degrees
double cosine(double x) {
    const double pi = M_PI; // Use M_PI for a more accurate value of pi
    double rad = x * (pi / 180.0); // Convert degrees to radians
    return cos(rad); // Return the cosine of the angle
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
