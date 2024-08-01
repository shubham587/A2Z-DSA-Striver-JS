# Capacity to Ship Packages within D Days

# Problem Statement: You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within 'd' days.
# The weights of the packages are given in an array 'of weights'. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. 
# The loaded weights must not exceed the maximum weight capacity of the ship.
# Find out the least-weight capacity so that you can ship all the packages within 'd' days.

# Example 1:
# Input Format:
#  N = 5, weights[] = {5,4,5,2,3,4,5,6}, d = 5
# Result:
#  9
# Explanation:
#  If the ship capacity is 9, the shipment will be done in the following manner:
# Day         Weights            Total
# 1        -       5, 4          -        9
# 2        -       5, 2          -        7
# 3        -       3, 4          -        7
# 4        -       5              -        5
# 5        -       6              -        6
# So, the least capacity should be 9.

