#include <iostream>
using namespace std;
int main(){

	srand(time(NULL));
	cout<<"enter length of arr, min and max values of rand nums\n";
	int len,min,max;
	cin>>len>>min>>max;
	int *arr= new int[len];
	string str;

	for(int i = 0;i<len;i++){
		cout<<endl<<rand()<<endl;
		arr[i]=rand()%(max-min)+min;
		if(i+1==len){
			str+=to_string(arr[i]);
			continue;
		}
		str+=to_string(arr[i])+",";
	}
	cout<<"["<<str<<"]";
	return 0;
}
