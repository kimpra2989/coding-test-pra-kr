n, k = map(int, input().split())
coin = []
c = 0
for _ in range(n):
  coin.append(int(input()))
coin.reverse()
for x in coin:
  c += k//x
  k -= x*(k//x)
print(c)