def check (N, A):
    list_R = []
    for i in range(N):
        k=i+1
        for j in range(k, N):
            if A[i] == A[j] and A[i] not in list_R:
                list_R.append(A[i])
    return list_R

    
    # Write your code here
    pass

N = int(input())
A = list(map(int, input().split()))


out_ = check(N, A)
out_.sort()
print (' '.join(map(str, out_)))

# QUESTION HERE

def check (N, A):
    list_R = []
    for i in range(N):
        k=i+1
        for j in range(k, N):
            if A[i] == A[j] and A[i] not in list_R:
                list_R.append(A[i])
    return list_R

    
    # Write your code here
    pass

N = int(input())
A = list(map(int, input().split()))


out_ = check(N, A)
out_.sort()
print (' '.join(map(str, out_)))

##






2nd QUESTION




def find_rank (X):

    X= sorted(list(X))
    count=0
    X = "".join(X)
    length_X = len(X)
    for i in range(length_X-2):
        for j in range(i+1, length_X):
            combination = X[i:j]
            #count = count + 1
    # Write your code here
    return combination

T = int(input())
for i in range(T):
    X = input()

    out_ = find_rank(X)
    print (out_)







    /*--------------------------*/

    def find_rank (X):

    X= sorted(list(X))
    count=0
    X = "".join(X)
    length_X = len(X)
    for i in range(length_X-2):
        for j in range(i+1, length_X):
            combination = X[i:j]
            #count = count + 1
    # Write your code here
    return combination

T = int(input())
for i in range(T):
    X = input()

    out_ = find_rank(X)
    print (out_)




    /***********************************/


    X= sorted(list(input()))
count=0
X = "".join(X)
length_X = len(X)
for i in range(length_X):
    for j in range(i+1, length_X):
        combination = X[i:j]
        print("".join(combination))
