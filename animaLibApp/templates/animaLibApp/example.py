
def solution(data, n):
    return [i for i in set(data) if data.count(i) >= n]

t = solutin([2,4,4,2,1,5], 1)
print(t)



