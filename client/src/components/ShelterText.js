import React from "react";
import './ShelterText.css'
import shelter2 from '../images/shelter2.jpg';

function ShelterText() {
    return (
        <>
            <div className="container">
                <h1>SECOND CHANCE ANIMAL SHELTER</h1>
             <p>               
             The shelter temporarily accommodates dogs captured from the street /born, lost or abandoned by their owners/ and domestic animals brought by citizens who can no longer care for them. 
            The shelter keeps a register in which full details of each captured dog are entered. 
            A staff member is on duty at the facility every day, including weekends and holidays, to care for boarded animals.
            After the adoption of the Animal Protection Act in 2008, the Municipality of Burgas started implementing the only sustainable and humane practice recommended by the European Union and the World Health Organization. 
            By a decision of the Municipal Council of Burgas, a Programme for controlling the stray dog population on the territory of Burgas Municipality was adopted. 
            Each year, the municipal budget allocates funds for its implementation and for the operation of the shelter, and the funds are spent in accordance with the Financial Management and Control System.
            In accordance with the Programme and the provisions of the LPA, stray dogs are captured by the Shelter team, dewormed, vaccinated against rabies, 
            neutered, tagged and after the necessary recovery period are returned to the places from which they were captured.
                </p>
                <p>
                The shelter for stray dogs of Burgas Municipality is one of the first shelters in Bulgaria and was established by a decision of the Municipal Council of Burgas in order to control the population of stray dogs. 
                It is registered under the Veterinary Medicine Act /VMD/. On its territory there is a registered veterinary medical establishment - 
                veterinary dispensary of the second category, entered in the register of veterinary medical establishments at the Veterinary Medical Department of the State Veterinary Inspectorate of the Republic of Bulgaria in the city of 
                Burgas with unique registration № 0292095.
                For the activity of the shelter there are adopted Regulations, prepared in accordance with the regulatory base, and the organization of its work is based on the rules and norms of animal welfare.
                </p>
                <p>
                In the shelter for stray dogs of Burgas Municipality work 8 employees - manager, 2 drivers, 2 hunters and 3 hygienists.
                The capture of stray animals is carried out by the hunting team of the shelter.
                The members of the Team have successfully passed a training course for protection and humane treatment of animals at Thracian University - Stara Zagora.
                The capture of the dogs is carried out by using a specialized pneumatic rifle, firing a syringe with an anaesthetic substance, the amount of anaesthetic being tailored to the size of the animal. 
                Each of the Shelter's employees is trained and instructed in advance on the manipulations that are performed when stray animals are captured, and veterinarians perform and supervise the dosing of the anesthetic. 
                The transport of the captured dogs to the Shelter is carried out by a suitably equipped specialised vehicle.
                According to the requirements of the Animal Welfare Act, stray cats shall be trapped in a manner and under conditions that ensure their health and with minimum suffering, and shall not be trapped with intoxicants. 
                In view of this, cats shall be trapped by one of the humane methods of trapping by baiting with food.
                </p>
                <div className= 'image-container'>
             <img src= {shelter2} className="scas-image"  alt=""/>
             </div>
                </div>

        </>
    );
      
}

export default ShelterText;