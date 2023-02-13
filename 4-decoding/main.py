# Encode the string "hello world"
encoded_string = "hello world".encode("utf-8")

# Decode the encoded string back to its original form
decoded_string = encoded_string.decode("utf-8")

print("Encoded String:", encoded_string) #prints the string plus there is b in the front that indicates the "byte type"
print("Decoded String:", decoded_string) #prints string 