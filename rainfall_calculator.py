import pandas as pd

def find_rainfall(csv_file, state_ut_name, district):
    # Load the CSV file into a DataFrame
    df = pd.read_csv(csv_file)
    
    # Filter the DataFrame based on the given location
    filtered_df = df[(df['STATE_UT_NAME'] == state_ut_name) & (df['DISTRICT'] == district)]
    
    if filtered_df.empty:
        print("No data found for the specified location.")
        return
    
    # Extract rainfall data
    rainfall_data = filtered_df[['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']]
    
    # Calculate average, median, highest, and lowest rainfall
    monthly_rainfall = rainfall_data.mean()
    median_rainfall = rainfall_data.median()
    highest_rainfall = rainfall_data.max()
    lowest_rainfall = rainfall_data.min()

    # Find months of highest, lowest, median, and average rainfall
    highest_month = monthly_rainfall.idxmax()
    lowest_month = monthly_rainfall.idxmin()
    median_months = median_rainfall[median_rainfall == median_rainfall].index.tolist()
    avg_rainfall = monthly_rainfall.mean()
    
    print(f"Rainfall data for {state_ut_name}, {district}:")
    print(f"Highest rainfall: {highest_month} ({highest_rainfall[highest_month]} mm)")
    print(f"Lowest rainfall: {lowest_month} ({lowest_rainfall[lowest_month]} mm)")
    print(f"Median rainfall: {', '.join(median_months)} ({median_rainfall[median_months].values[0]} mm)")
    print(f"Average monthly rainfall: {avg_rainfall:.2f} mm")

# Example usage
csv_file = '/mnt/c/Users/jbtff/OneDrive/Documents/district wise rainfall normal.csv'  # Replace with your CSV file path
state_ut_name = input("Enter the State/UT name: ")
district = input("Enter the District name: ")

find_rainfall(csv_file, state_ut_name, district)
