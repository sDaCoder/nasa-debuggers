import pandas as pd

def find_rainfall(csv_file, state_ut_name, district):
   
    df = pd.read_csv(csv_file)
    
    
    filtered_df = df[(df['STATE_UT_NAME'] == state_ut_name) & (df['DISTRICT'] == district)]
    
    if filtered_df.empty:
        print("No data found for the specified location.")
        return
    
    
    rainfall_data = filtered_df[['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']]
    
    
    monthly_rainfall = rainfall_data.mean()
    median_rainfall = rainfall_data.median()
    highest_rainfall = rainfall_data.max()
    lowest_rainfall = rainfall_data.min()

   
    highest_month = monthly_rainfall.idxmax()
    lowest_month = monthly_rainfall.idxmin()
    median_months = median_rainfall[median_rainfall == median_rainfall].index.tolist()
    avg_rainfall = monthly_rainfall.mean()
    
    print(f"Rainfall data for {state_ut_name}, {district}:")
    print(f"Highest rainfall: {highest_month} ({highest_rainfall[highest_month]} mm)")
    print(f"Lowest rainfall: {lowest_month} ({lowest_rainfall[lowest_month]} mm)")
    print(f"Median rainfall: {', '.join(median_months)} ({median_rainfall[median_months].values[0]} mm)")
    print(f"Average monthly rainfall: {avg_rainfall:.2f} mm")


csv_file = '/mnt/c/Users/jbtff/OneDrive/Documents/district wise rainfall normal.csv'  # Replace with your CSV file path (district wise rainfall normal.csv))
state_ut_name = input("Enter the State/UT name: ")
district = input("Enter the District name: ")

find_rainfall(csv_file, state_ut_name, district)
