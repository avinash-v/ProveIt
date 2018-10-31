import re
import math
from collections import Counter


WORD = re.compile(r'\w+')

def get_cosine(vec1, vec2):
     intersection = set(vec1.keys()) & set(vec2.keys())
     numerator = sum([vec1[x] * vec2[x] for x in intersection])

     sum1 = sum([vec1[x]**2 for x in vec1.keys()])
     sum2 = sum([vec2[x]**2 for x in vec2.keys()])
     denominator = math.sqrt(sum1) * math.sqrt(sum2)

     if not denominator:
        return 0.0
     else:
        return float(numerator) / denominator

def text_to_vector(text):
     words = WORD.findall(text)
     return Counter(words)

text1 = 'C programming,Java,Python'
text2=[[1,"Java, C programming, R programming"],[3,"NodeJs, HTML, CSS"],[5,"C programming, Java, Python"],[8,"NodeJs, Java"]]

vector1 = text_to_vector(text1)
l=[]
val=-11111
for i in range(len(text2)):
	vector2 = text_to_vector(text2[i][1])
	cosine = get_cosine(vector1, vector2)
	l.append(cosine)
	print 'Project id: ',text2[i][0],'Cosine:', cosine
	if(cosine>val):
		val=cosine
		projid=text2[i][0]
		#max=val
print 'Max Project id', projid, 'Similarity: ',val
print 'Recommendation for user: See project_id ', projid
