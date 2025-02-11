n = int(input())
c = n
for i in range(n):
  w = input()
  for a in range(len(w)-1):
    if len(w) == 1:
      break
    elif w[a+1] == w[a]:
      continue
    else:
      if w[a] in w[a+1:]:
        c -= 1
        break
print(c)