/*
How to read chassis number / Vehicle Identification Number (VIN)

World Manufacturer Identifier (WMI) - First 3 Digits
Vehicle Descriptor Section (VDS) - The VDS section of your VIN (Vehicle Identification Number) contains information such as 
       the model year, body style, engine type, and other specification
Vehicle Identifier Section (VIS) - Last 6 Digits

(WMI Section)
Digit 1: *where the car was assembled*
       J - Japan
       K - South Korea
       S - England
       W - Germany
       Y - Finland / Sweden
       1/4/5 - U.S
       2 - Canada
       3 - Mexico

Digit 2: *indicates the manufacturer*
       B - BMW
       P - 
       V - 
       U/Y - 

Digit 3: *vehicle type*
       A - 
       X - 

(VDS Section)
Digit 4 - 8: *describes the particular vehicle, such as the model, body style, engine type, and transmission*

Digit 6: *restraint system*
       3 - Driver and Passenger Airbags

Digit 7: *To Validate Digit 10 & Type Of Vehicle*
       IF (Digit 7 == 'NUMERIC')
              VehicleModelYear = (1980 - 2009)
       ELSE IF (Digit 7 == 'ALPHABET')
              VehicleModelYear = (2010 - 2039)

Digit 9: *this digit will verify the VIN is valid. There will be an error in the VIN if you input it incorrectly*

Digit 10: *year assembled / model year*
       A - 2010
       B - 2011
       C - 2012
       D - 2013
       E - 2014
       F - 2015
       G - 2016
       H - 1987/2017
       J - 1988
       T - 1996
       
Digit 11: *factory where it was assembled*
       K - 

(VIS Section)
Digit 12 - 17: *factory's production sequence number*


Example Chassis Numbers:-
i) BMW - WBSAK030XJ2195372  //2.3L L4 DOHC 16V RWD, M3, 1988
       - WBSFC4419L8000810  //3-Series, 1980
       - WBAAL32040AZ13247  //1.9L 8V RWD, E46 318i, 2000
       (real VIN) - WBAVA72070AK42591  //2.0L 16V RWD, E90 320i, 2007, Petrol - 6 SPEED OIL
       (real VIN) - WBAJA12040BJ20230
       (real VIN) - WBA5F31050FJ99264
       (real VIN) - 5UXFG8C56ALZ94972 
       (real VIN) - WBA3X5C52ED242573
       (real VIN) - WBA23AT09PCL15063 
       (real VIN) - WBA8E3C52GK503179

ii) Volkswagen (real VIN) - WVWZZZ3CZDE549458  //Passat CC, 2013, Diesel, Manual
                          - PPVZZZ3CZEL001859  //Passat CC, 2014, Manual

iii) Acura - 5J8TB4H38FL002262  //3.5L 24V AWD, RDX, 2015
           (generated VIN) - JH4KA3140JC003021

iv) Lexus - JTHBL5EF9D5121773  //4.6L V8 DOHC 32V RWD, LS 460, 2013

v) Volvo (real VIN) - YV1944817T5226345  //2.3L 8V RWD, 940, 1996, 4-Speed Automatic
         (real VIN) - PNVMV40HDH5439366  //1987

vi) Ford (real VIN) - MPB1XXMXB1DB37562  //2013
         (generated VIN) - 1ZVFT80N475211367  //

vii) Mercedes (real VIN) - WDC2539466L013382  //

viii) Chevrolet (generated VIN) - 1GBJK39DX6E165432  //

ix) Porsche (generated VIN) - WP0AC29945S692185  //

x) Peugeot (real VIN) - VF38D5FVACL046652  //

*/