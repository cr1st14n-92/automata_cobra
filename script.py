import os
import subprocess


pathString="C:/Users/christian.alvarez/Desktop/dirAutomata/"

#print(os.path.dirname(pathString))

#print(os.listdir(pathString))

def recordDir(url):
    listaDir=os.listdir(url)
    #print("llamada")
    for file in listaDir:
        if os.path.isdir(url+"/"+file):
            recordDir(url+"/"+file)
        else:
            #count= count+1
            #print(file)
            if file.endswith(".pdf") or file.endswith(".PDF"):
                dirFile= url+"/"+file
                subprocess.call(["python","pdf_compressor.py",dirFile])
                #print("reducipdf -- "+url)
                #print(file)


        


recordDir(pathString)

