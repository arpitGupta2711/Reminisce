#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>
#include <complex>
#include <queue>
#include <set>
#include <unordered_set>
#include <list>
#include <chrono>
#include <random>
#include <iostream>
#include <algorithm>
#include <cmath>
#include <string>
#include <vector>
#include <map>
#include <unordered_map>
#include <stack>
#include <iomanip>
#include <fstream>

using namespace std;

typedef long long ll;
typedef long double ld;
typedef pair<int,int> p32;
typedef pair<ll,ll> p64;
typedef pair<double,double> pdd;
typedef vector<ll> v64;
typedef vector<int> v32;
typedef vector<vector<int> > vv32;
typedef vector<vector<ll> > vv64;
typedef vector<vector<p64> > vvp64;
typedef vector<p64> vp64;
typedef vector<p32> vp32;
ll MOD = 998244353;
double eps = 1e-12;
#define forn(i,e) for(ll i = 0; i < e; i++)
#define forsn(i,s,e) for(ll i = s; i < e; i++)
#define rforn(i,s) for(ll i = s; i >= 0; i--)
#define rforsn(i,s,e) for(ll i = s; i >= e; i--)
#define ln "\n"
#define dbg(x) cout<<#x<<" = "<<x<<ln
#define mp make_pair
 #define setbits(x)  __builtin_popcountll(x) // returns number of 1-bits of x
#define trailing0(x) __builtin_ctzll(x) //returns num of trailing 0-bits of x
#define leading0(x) __builtin_clzll(x) //returns num of leading 0-bits of x
#define firstbitpos(x) __builtin_ffsll(x) //returns 1 + indexOf(least significant 1-bit)
#define pb push_back
#define fi first
#define se second
#define INF 2e18
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
#define all(x) (x).begin(), (x).end()
#define sz(x) ((ll)(x).size())


void solve(vector<string>&items){
  for(int i=0;i<items.size();i++){
    if(items[i].size()==0){
        items.erase(items.begin()+i);
    }
  }    
}
int main(int argc,char** argv)
{

std::promise<int> promise;
auto future = promise.get_future();
for(auto &i: {3,2,1}){
   thread work([&promise,i](){
        this_thread::sleep_for(chrono::seconds(i));
        promise.set_value(i);
    });
    work.detach();
    }
    cout<<future.get()<<endl;
}

}
