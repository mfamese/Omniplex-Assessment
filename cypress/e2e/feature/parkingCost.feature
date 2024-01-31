Feature: PARKING COST CALCULATOR

    Scenario: Verify the cost of 2hrs valet parking
        Given a user visits the parking cost calculator url
        And selects a parking lot as '<parkingOption>'
        And enters the entry date as '<entryDate>'
        And entry time as '<entryTime>'
        And enters the leaving date as '<leavingDate>'
        And leaving time as '<leavingTime>'
        When the user clicks the calculator button
        Then the estimated total parking cost should be displayed as '<expectedPackingCost>'

        Examples:
            | parkingOption      | entryDate | entryTime | leavingDate | leavingTime | expectedPackingCost |
            | Valet Parking      | 1/30/2024 | 08:00     | 1/30/2024   | 12:00       | 12.00               |
            | Economy Parking    | 1/30/2024 | 08:00     | 1/30/2024   | 12:00       | 8.00                |
            | Short-Term Parking | 1/30/2024 | 08:00     | 1/31/2024   | 12:00       | 32.00               |